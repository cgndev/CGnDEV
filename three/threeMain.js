import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';

// Scene, camera, renderer 세팅
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 큐브 생성 (세그먼트 수 설정)
const geometry = new THREE.BoxGeometry(2, 2, 2, 16, 16, 16); // 8x8x8 세그먼트의 큐브
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 카메라 위치
camera.position.z = 5;

// 버텍스 포지션에 노이즈 추가 함수
function applyNoiseToVertices(geometry) {
    const positionAttribute = geometry.attributes.position;
    const vertexCount = positionAttribute.count;

    for (let i = 0; i < vertexCount; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);

        // 노이즈 적용 (랜덤 값)
        const noiseStrength = 0.2;
        const newX = x + (Math.random() - 0.5) * noiseStrength;
        const newY = y + (Math.random() - 0.5) * noiseStrength;
        const newZ = z + (Math.random() - 0.5) * noiseStrength;

        positionAttribute.setXYZ(i, newX, newY, newZ);
    }

    positionAttribute.needsUpdate = true; // 변경 사항 적용
}

// 최초 실행 시 노이즈 적용
applyNoiseToVertices(geometry);

// 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    renderer.render(scene, camera);
}

animate();

// 화면 크기 변경 시 리사이즈 처리
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
