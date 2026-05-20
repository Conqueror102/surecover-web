const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Remove oninput="..."
  const newContent = content.replace(/oninput="[^"]*"/gi, () => {
    changed = true;
    return '';
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
