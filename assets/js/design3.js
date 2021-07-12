const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#d3"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.CylinderGeometry(10, 10, 30, 30);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true,
});
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

// torus.rotation.x = 1.6;

function animate() {
  requestAnimationFrame(animate);

  // cylinder.rotation.z += 0.01;
  cylinder.rotation.y += 0.005;

  // cylinder.scale.y += 0.01;
  cylinder.scale.x += 0.005;
  cylinder.scale.z += 0.005;

  renderer.render(scene, camera);
}

animate();
