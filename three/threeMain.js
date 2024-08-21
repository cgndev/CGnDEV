import * as THREE from 'three';

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xff4592 } );
const mesh = new THREE.Mesh( geometry, material );

scene.add( mesh );

camera.position.z = 5;

window.addEventListener( 'resize', onWindowResize );

function animate()
{
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}



// const points = geometry.attributes.position;
// const pointsGeometry = new THREE.BufferGeometry().setFromPoints( points );
// const pointsMaterial = new THREE.PointsMaterial( { size: 0.02, color: 0xff4592 } );
// const particles = new THREE.Points( pointsGeometry, pointsMaterial );

// //scene.add( particles );