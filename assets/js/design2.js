const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#d2"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry1 = new THREE.TorusGeometry(20, 14, 20, 100);
const material1 = new THREE.MeshBasicMaterial({
  color: 0x8700eb,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry1, material1);
scene.add(torus);

torus.rotation.x = 1.6;

function animate() {
  requestAnimationFrame(animate);

  // torus.rotation.x += 0.01;
  torus.rotation.z += 0.005;

  // torus.scale.z += 0.01;

  renderer.render(scene, camera);
}

animate();
