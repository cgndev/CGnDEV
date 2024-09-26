import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';

// Scene, camera, renderer 세팅
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 큐브 생성 (세그먼트 수 설정)
const geometry = new THREE.BoxGeometry(2, 2, 0.05, 8, 8, 8); // 8x8x8 세그먼트의 큐브
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 카메라 위치
camera.position.y = 0.2;
camera.position.z = 5;

// 애니메이션 시작 시간 저장
const startTime = performance.now();

// 버텍스 포지션에 누적된 시간을 사용해 Sin 함수를 적용하는 함수
function applySinWaveToVertices(geometry, elapsedTime) {
    const positionAttribute = geometry.attributes.position;
    const vertexCount = positionAttribute.count;

    for (let i = 0; i < vertexCount; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);

        // Sin 함수를 사용하여 버텍스에 시간에 따른 변형을 적용
        const wave = Math.sin(elapsedTime * 0.001 + x * 2) * 0.01; // 시간 누적 및 x 좌표에 따른 변형

        positionAttribute.setXYZ(i, x, y + wave, z);
    }

    positionAttribute.needsUpdate = true; // 변경 사항 적용
}

// 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);

    // 경과 시간 계산 (밀리초 단위)
    const elapsedTime = performance.now() - startTime;

    // Sin 웨이브 적용
    applySinWaveToVertices(geometry, elapsedTime);

    // 큐브 회전 (시각적 확인을 위한 간단한 회전)
    // cube.rotation.x += 0.001;
    // cube.rotation.y += 0.001;

    // 씬 렌더링
    renderer.render(scene, camera);
}

animate();

// 화면 크기 변경 시 리사이즈 처리
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
