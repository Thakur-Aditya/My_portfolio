import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[1,1, 2]} />
      <mesh castShadow receiveShadow scale={4.5} rotation={[0, Math.PI/2, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="white"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          // debug
          map={decal}
          position={[0, 0, 0.9]}
          flatShading
          rotation={[0, 0, 0]}
          // rotation={[Math.PI / 2, 0, 0]}
          scale={[1.15,1.15,1.15]}
        />
      </mesh>
    </Float>
  );
};

function BallCanvas({ icon }) {
  return (
    <Canvas
      frameloop="always"
      camera={{ position: [20, 3, 5], fov: 24 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default BallCanvas;
