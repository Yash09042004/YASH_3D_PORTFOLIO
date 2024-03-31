import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Charizard = () => {
  const { scene } = useGLTF("./charizardpokemon/scene.gltf");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.scale.set(0.02, 0.02, 0.02);
    }
  });

  return (
    <primitive 
      ref={ref}
      object={scene} 
      position-y={0} 
      rotation-y={0} 
      castShadow 
      receiveShadow 
    />
  );
};

const CharizardCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={0.75} />
      <pointLight position={[40, 40, 40]} intensity={1} />
      <directionalLight position={[-50, -10, -1]} intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Charizard />

        <Preload all />
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default CharizardCanvas;