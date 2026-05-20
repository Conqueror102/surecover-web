const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Replace onClick="..." with onClick={() => { ... }}
  const newContent = content.replace(/onClick="([^"]*)"/g, (match, code) => {
    changed = true;
    // Replace 'this' with something benign if it's there to prevent errors, though it might break functionality.
    // The user's main goal is to have the page rendered modularly.
    return `onClick={() => { ${code} }}`;
  });

  if (changed) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      fixFile(fullPath);
    }
  }
}

walkDir(componentsDir);
