const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#d4"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusKnotGeometry(15, 6, 100, 20);
const material = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// torusKnot.scale.x = 2

function animate() {
  requestAnimationFrame(animate);
  
  torusKnot.rotation.x += 0.005;
  torusKnot.rotation.y += 0.005;
  torusKnot.rotation.z += 0.005;

  renderer.render(scene, camera);
}

animate();
