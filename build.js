const fs = require('fs');
const path = require('path');

function copyFileSync(source, target) {
  let targetFile = target;
  if (fs.existsSync(target) && fs.lstatSync(target).isDirectory()) {
    targetFile = path.join(target, path.basename(source));
  }
  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach(function(file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, path.join(target, file));
      } else {
        const ext = path.extname(file);
        if (['.html', '.css', '.scss', '.ttf', '.woff', '.woff2', '.eot', '.svg', '.jpg', '.png', '.js'].includes(ext)) {
          copyFileSync(curSource, target);
        }
      }
    });
  }
}

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy files from src to dist
copyFolderRecursiveSync('src', 'dist');
