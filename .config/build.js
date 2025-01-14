const fs = require("fs"),
  execSync = require('child_process').execSync,
  packages = [
    'core',
    'bootstrap',
    // 'material',
    // 'ionic',
    // 'primeng',
    // 'kendo',
    // 'schematics',
    // 'nativescript',
  ];

// update `FORMLY-VERSION` in package.json for all sub-packages
const version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
packages.map(package => {
  const packagePath = `dist/@ruslanguns/${package}`;

  execSync(`cp README.md ${packagePath}`);

  package = fs.readFileSync(`${packagePath}/package.json`, 'utf8');
  fs.writeFileSync(`${packagePath}/package.json`, package.replace(/0.0.0-FORMLY-VERSION/g, version));
});
