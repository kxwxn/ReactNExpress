import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './ThreeD.module.css'

const ThreeD = () => {
  const sceneRef = useRef();
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  const renderer = useRef(new THREE.WebGLRenderer());
  const cube = useRef(null);

  useEffect(() => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // 이 부분을 수정하여 초기에 한 번 객체를 생성하고 재사용합니다.
    if (!cube.current) {
      cube.current = new THREE.Mesh(geometry, material);
      scene.current.add(cube.current);
    }

    camera.current.position.z = 5;
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.current.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.current.rotation.x += 0.01;
      cube.current.rotation.y += 0.01;
      renderer.current.render(scene.current, camera.current);
    };
    animate();
  }, []);

  return <div ref={sceneRef}></div>;
};

export default ThreeD;

