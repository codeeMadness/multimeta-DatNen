import { VirtualEnvironment } from 'https://multimeta.netlify.app/stm-kit/VirtualEnvironment.js';

// start by creating a basic virtual environment
let virtualEnvironment = new VirtualEnvironment();

// then fill your world with the stuff you want
init();
function init() {
    virtualEnvironment.loadTerrain('//asset.airclass.io/public/DatNen.glb', 0, 0, 0, "glb", 40)
    virtualEnvironment.spawnPlayer({spawn: {x:0, y:70, z:0}})
}

// then start the animation
animate();
function animate() {
    virtualEnvironment.update();
    requestAnimationFrame(animate);
}