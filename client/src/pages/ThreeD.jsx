import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./ThreeD.module.css";

const ThreeD = () => {
  // 1. ref를 사용하여 실제 DOM 요소를 참조할 변수 생성
  const sceneRef = useRef();

  // 2. Three.js 관련 객체를 useRef를 사용하여 생성 및 참조
  const scene = useRef(new THREE.Scene()); // Three.js 씬을 참조하기 위한 ref
  const camera = useRef(
    new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
  ); // 카메라를 참조하기 위한 ref
  const renderer = useRef(new THREE.WebGLRenderer()); // 렌더러를 참조하기 위한 ref
  const cube = useRef(null); // geometry 객체를 참조하기 위한 ref

  useEffect(() => {
    // 3. geometry와 material 생성
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // 4. 객체가 처음 생성되었을 때만 씬에 추가
    if (!cube.current) {
      cube.current = new THREE.Mesh(geometry, material);
      scene.current.add(cube.current);
    }

    // 5. 카메라 설정
    camera.current.position.z = 5;

    // 6. WebGL 렌더러 설정
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.current.domElement);

    // 7. 애니메이션 함수 정의
    const animate = () => {
      requestAnimationFrame(animate);
      cube.current.rotation.x += 0.01;
      cube.current.rotation.y += 0.01;
      renderer.current.render(scene.current, camera.current);
    };

    // 8. 애니메이션 시작
    animate();
  }, []);

  // 9. Three.js 씬을 렌더링할 DOM 요소 반환
  return <div ref={sceneRef}></div>;
};

export default ThreeD;


// 1. scene, camera, light, shadow, setting
// 2. .glb loader
// 3. orbit setting
// 4. groundMesh, groundGeometry