import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import CanvasLoader from "../Loader";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
export const Snow = () => {
  const meshRef = useRef();
  const particleCount = 500; // reduce the number of particles
  const particleSpread = 20; // increase the spread

  useEffect(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * particleSpread;
    }
    meshRef.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
  }, [particleCount, particleSpread]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.geometry.attributes.position.array.forEach((v, i) => {
        if (i % 3 === 1) {
          meshRef.current.geometry.attributes.position.array[i] -= 0.01;
          if (v < -particleSpread / 2) {
            meshRef.current.geometry.attributes.position.array[i] = particleSpread / 2;
          }
        }
      });
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry />
      <pointsMaterial color="white" size={0.05} />
    </points>
  );
};


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={4} rotationIntensity={2} floatIntensity={4}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#8A2BE2'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      <Snow /> {/* Move the Snow component here */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} /> {/* Remove the Snow component from here */}
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;