const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'surecova-website-v2-1.html');
const cssPath = path.join(__dirname, 'app', 'globals.css');
const tailwindConfigPath = path.join(__dirname, 'tailwind.config.ts');
const jsTailwindConfigPath = path.join(__dirname, 'tailwind.config.js');

try {
  const html = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract CSS
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    let css = styleMatch[1];
    
    // Prefix with Tailwind directives
    css = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n${css}`;
    
    fs.writeFileSync(cssPath, css);
    console.log('Successfully extracted CSS to app/globals.css');
  } else {
    console.error('Could not find <style> block in HTML');
  }

  // Define the colors for tailwind config
  const colors = {
    teal: {
      DEFAULT: '#0D9B88',
      hi: '#11C4AD',
      lo: '#072E28',
      mid: '#0B5C52',
    },
    navy: {
      DEFAULT: '#FFFFFF', // In HTML it's #FFFFFF but named navy? Wait: --navy:#FFFFFF;
      2: '#F8FAFB',
      3: '#F0F4F6',
    },
    dark: '#0B2545',
    green: '#17A85C',
    red: '#D44040',
    ink: {
      DEFAULT: 'rgba(10,20,40,.85)',
      2: 'rgba(10,20,40,.55)',
      3: 'rgba(10,20,40,.40)',
      4: 'rgba(10,20,40,.12)',
      5: 'rgba(10,20,40,.06)',
    }
  };

  // Check if tailwind config is TS or JS
  let configStr = '';
  if (fs.existsSync(tailwindConfigPath)) {
    configStr = fs.readFileSync(tailwindConfigPath, 'utf8');
  } else if (fs.existsSync(jsTailwindConfigPath)) {
    configStr = fs.readFileSync(jsTailwindConfigPath, 'utf8');
  }

  console.log('Update Tailwind Config manually if needed, colors are:', JSON.stringify(colors, null, 2));
} catch (err) {
  console.error(err);
}
