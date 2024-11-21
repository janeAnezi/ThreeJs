import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 2]} />
        <meshLambertMaterial color="#468585" emissive="#468585" />
      </mesh>
      <Sparkles count={200} scale={[10, 10, 10]} size={2} speed={0.15} noise={1} color="white" />
    </>
  );
};

export default function App() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }} camera={{ position: [0, 0, 10] }}>
      <OrbitControls enableZoom enablePan enableRotate />

      <ambientLight intensity={0.5} />

      <directionalLight position={[5, 5, 5]} intensity={1} />

      <color attach="background" args={["black"]} />

      <RotatingCube />
    </Canvas>
  );
}
