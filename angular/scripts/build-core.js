const fs = require('fs-extra');
const path = require('path');
const spawn = require('child_process').spawn;

const stencilPath = path.join(__dirname, '..', '..', 'core', 'node_modules', '.bin');


function buildIonicAngular() {
<<<<<<< HEAD
  return new Promise((resolve, reject) => {

    const cmd = 'stencil';
    const args = [
      'build',
      '--config',
      path.join(__dirname, '..', 'stencil.config.js'),
      ...process.argv.slice(2)
    ];

    const p = spawn('stencil', args, { cwd: stencilPath, stdio: 'inherit' });
    p.on('close', (code) => {
      if (code > 0) {
        console.log(`@ionic/angular build exited with ${code}`);
        reject();
      } else {
        resolve();
      }
    });
=======
  const cmd = 'stencil';
  const args = [
    'build',
    '--config',
    path.join(__dirname, '..', 'stencil.config.js'),
    ...process.argv.slice(2)
  ];

  console.log(cmd, args.join(' '));

  const p = spawn('./stencil', args, { cwd: stencilPath, stdio: 'inherit' });
  p.on('close', (code) => {
    if (code > 0) {
      console.log(`@ionic/angular build exited with ${code}`);
    }
  });
}

function buildIonicCore() {
  const cmd = 'stencil';
  const args = [
    'build',
    '--config',
    path.join(__dirname, '..', '..', 'core', 'stencil.config.js'),
    ...process.argv.slice(2)
  ];

  console.log(cmd, args.join(' '));

  const p = spawn('./stencil', args, { cwd: stencilPath, stdio: 'inherit' });
  p.on('close', (code) => {
    if (code > 0) {
      console.log(`@ionic/core build exited with ${code}`);
    } else {
      copyIonicCore();
      copyIonicons();
    }
>>>>>>> master
  });
}

function copyIonicons() {
  const src = path.join(__dirname, '..', '..', 'core', 'node_modules', 'ionicons');
  const dst = path.join(__dirname, '..', 'node_modules', 'ionicons');

  fs.removeSync(dst);
  fs.copySync(src, dst);
}

function copyCSS() {
  const src = path.join(__dirname, '..', '..', 'core', 'css');
  const dst = path.join(__dirname, '..', 'css');

  fs.removeSync(dst);
  fs.copySync(src, dst);
}

<<<<<<< HEAD
copyIonicons();
copyCSS();
=======
buildIonicCore();
>>>>>>> master
buildIonicAngular();
