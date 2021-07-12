const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#d1"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(13, 5, 20, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0x41CBE1,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// 0xff6347

const geometry1 = new THREE.TorusGeometry(16, 12, 20, 100);
const material1 = new THREE.MeshBasicMaterial({
  color: 0xDB325F,
  wireframe: true,
});
const torus1 = new THREE.Mesh(geometry1, material1);
scene.add(torus1);

// torus1.rotation.x = 1.6;

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.005;
  torus.rotation.z += 0.005;

  torus1.rotation.x += 0.005;
  torus1.rotation.z -= 0.005;

  renderer.render(scene, camera);
}

animate();
