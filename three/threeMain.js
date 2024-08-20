import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xff4592 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate()
{
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}

// todo 1 : 새로운 BoxGeometry를 만든다. 단,  기존 핑크 큐브보다 살짝 크고, 면 세그먼트를 더 쪼갠다.
// todo 2 : 버텍스 정보들을 불러와서 Points 를 만든다.
// todo 3 : Points에 PointMaterial 을 적용(같은 색)해서 같이 회전하도록한다.