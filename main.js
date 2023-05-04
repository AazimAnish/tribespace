// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);

// Load the glTF model
// Load the glTF model
const loader = new THREE.GLTFLoader();
loader.load(
  'keralamap.glb',
  function (gltf) {
    // Disable texture loading by iterating over all materials in the model
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = null;
        child.material.needsUpdate = true;
      }
    });

    // Add the model to the scene
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);


// Add a mousemove event listener to the renderer element
renderer.domElement.addEventListener('mousemove', onMouseMove);

// Define the onMouseMove function
function onMouseMove(event) {
  // Calculate the mouse position in normalized device coordinates (-1 to +1)
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  

  // Create a raycaster from the camera position and mouse coordinates
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera({ x: mouseX, y: mouseY }, camera);

  // Find all intersecting objects with the raycaster
  const intersects = raycaster.intersectObjects(scene.children, true);

  // If there is at least one intersection, highlight the district
  if (intersects.length > 0) {
    const district = intersects[0].object;

    // Set the material color to the hover color
    // district.material.color.set(0xff0000);
  }
}

// Set up the camera position
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
