import * as THREE from 'three';

import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

let camera, controls, scene, renderer, effect;

let sphere, plane, pointLight1;;

const startTime = Date.now();

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 3000 );
    camera.position.set( 200, 150, 1000 );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0, 0, 0 );

    pointLight1 = new THREE.PointLight( 0xFFFFFF, 1 );
    pointLight1.position.set( 500, 500, 500 );
    scene.add( pointLight1 );

    const pointLight2 = new THREE.PointLight( 0xFFFFFF,  0.05 );
    pointLight2.position.set( -500, -500, -500 );
    scene.add( pointLight2 );

    sphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 100 ), new THREE.MeshPhongMaterial( {flatShading: true } ) );
    scene.add( sphere );

    plane = new THREE.Mesh( new THREE.PlaneGeometry( 5000, 5000 ), new THREE.MeshPhongMaterial( { color: 0xe0e0e0 } ) );
    plane.position.set( 0, -200, 0 );
    plane.rotation.x = -Math.PI / 2;
    scene.add( plane );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
    effect.setSize( innerWidth, innerHeight );
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'black';
    document.body.appendChild( effect.domElement );

    controls = new TrackballControls( camera, effect.domElement );
    
    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    effect.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    render();

}

function render() {

    const timer = Date.now() - startTime;

    sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
    sphere.rotation.x = timer * 0.0003;
    sphere.rotation.z = timer * 0.0002;

    controls.update();

    effect.render( scene, camera );

}