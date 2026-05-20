const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'surecova-website-v2-1.html');
const componentsDir = path.join(__dirname, 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

function convertToJSX(html) {
  let jsx = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/onclick=/g, 'onClick=')
    .replace(/onmouseover=/g, 'onMouseOver=')
    .replace(/onmouseout=/g, 'onMouseOut=')
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<img(.*?)>/g, (match, attrs) => {
      if (match.endsWith('/>')) return match;
      return `<img${attrs} />`;
    })
    .replace(/<input(.*?)>/g, (match, attrs) => {
      if (match.endsWith('/>')) return match;
      return `<input${attrs} />`;
    })
    // Quick inline style converter
    .replace(/style="([^"]*)"/g, (match, styleString) => {
      const styles = styleString.split(';').filter(s => s.trim());
      const styleObj = {};
      styles.forEach(s => {
        const [key, ...valParts] = s.split(':');
        if (!key || valParts.length === 0) return;
        let val = valParts.join(':').trim();
        let camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = val;
      });
      return `style={${JSON.stringify(styleObj)}}`;
    });
  
  // Fix svg
  jsx = jsx.replace(/stroke-width/g, 'strokeWidth')
           .replace(/stroke-linecap/g, 'strokeLinecap')
           .replace(/stroke-linejoin/g, 'strokeLinejoin')
           .replace(/fill-rule/g, 'fillRule')
           .replace(/clip-rule/g, 'clipRule')
           .replace(/viewbox/gi, 'viewBox');
           
  // Fix empty select options
  jsx = jsx.replace(/<option>\s*<\/option>/g, '<option value=""></option>');
           
  return jsx;
}

const html = fs.readFileSync(htmlPath, 'utf8');

const sectionsRegex = /<!-- ═══ (.*?) ═══ -->([\s\S]*?)(?=<!-- ═══ |<\/body>)/g;
let match;
const components = [];

while ((match = sectionsRegex.exec(html)) !== null) {
  const nameRaw = match[1].trim();
  let content = match[2].trim();
  
  let compName = nameRaw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
  compName = compName.replace(/[^a-zA-Z]/g, '');
  
  if (!compName) continue;
  if (compName === 'Nav') compName = 'Navbar';
  if (compName === 'VisualFlowStrip') compName = 'VisualFlow';
  if (compName === 'FindADoctor') compName = 'FindDoctor';
  if (compName === 'DoctorRegistrationForm') compName = 'DoctorRegistration';
  
  const jsx = convertToJSX(content);
  
  const fileContent = `export default function ${compName}() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

  const compDir = path.join(componentsDir, compName);
  if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });
  
  fs.writeFileSync(path.join(compDir, `${compName}.tsx`), fileContent);
  console.log(`Created ${compName}.tsx`);
  components.push(compName);
}

// Write the main page
const pageContent = `import React from 'react';
${components.map(c => `import ${c} from '@/components/${c}/${c}';`).join('\n')}

export default function Home() {
  return (
    <main>
      ${components.map(c => `<${c} />`).join('\n      ')}
    </main>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'app', 'page.tsx'), pageContent);
console.log('Updated app/page.tsx');
