var cubeA, cubeB;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 20);

  scene = new THREE.Scene();

  var geometry = new THREE.OctahedronGeometry(1, 0)
  var color = new THREE.Color("#7833aa");
  var color2 = new THREE.Color("#cccccc");
  var material1 = new THREE.MeshLambertMaterial({
    color: color.getHex()
  });
  var material2 = new THREE.MeshLambertMaterial({
    color: color2.getHex()
  });
  cubeA = new THREE.Mesh(geometry, material1);
  cubeA.position.set(0, 0, 0);

  cubeB = new THREE.Mesh(geometry, material2);
  cubeB.position.set(1, 1, 1);

  //create a group and add the two cubes
  //These cubes can now be rotated / scaled etc as a group
  var group = new THREE.Group();
  group.add(cubeA);
  group.add(cubeB);

  scene.add(group);

  // so many lights
  var light0 = new THREE.DirectionalLight(0xffffff, 1);
  light0.position.set(0, 1, 0);
  scene.add(light0);

  var light1 = new THREE.DirectionalLight(0xffffff, 0.5);
  light1.position.set(0, -1, 0);
  scene.add(light1);

  var light2 = new THREE.DirectionalLight(0xffffff, 1);
  light2.position.set(1, 0, 0);
  scene.add(light2);

  var light3 = new THREE.DirectionalLight(0xffffff, 0.5);
  light3.position.set(0, 0, 1);
  scene.add(light3);

  var light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(0, 0, -1);
  scene.add(light4);

  var light5 = new THREE.DirectionalLight(0xffffff, 0.5);
  light5.position.set(-1, 0, 0);
  scene.add(light5);



  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener('wheel', onMouseWheel, false);
  window.addEventListener('resize', onWindowResize, false);

  var animate = function() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };


}

function animate() {

  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

function onMouseWheel(event) {

  event.preventDefault();
	
  cubeA.rotation.y += event.deltaY * 0.05;
  cubeB.rotation.y -= event.deltaY * 0.05;

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

}
