// Starfield.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Starfield = () => {
  const starfieldRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    starfieldRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 24, 24);
    const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const stars = new Array(1000).fill().map(() => {
      const star = new THREE.Mesh(geometry, material);
      star.position.set(Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 1000 - 500);
      return star;
    });

    stars.forEach(star => scene.add(star));

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      stars.forEach(star => {
        star.rotation.x += 0.01;
        star.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      scene.dispose();
    };
  }, []);

  return <div ref={starfieldRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default Starfield;