// components/OrbitingSkills.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, memo } from 'react';
import * as THREE from 'three';

export default function OrbitingSkillsScene() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        <OrbitControls enableZoom={true} />

        <OrbitingSkills />
      </Canvas>
    </div>
  );
}

// -------------------------------
// OPTIMIZED ORBITING SKILLS GROUP
// -------------------------------

const OrbitingSkills = memo(function OrbitingSkills() {
  const groupRef = useRef<THREE.Group>(null!);

  // rotating animation
  useFrame(() => {
    groupRef.current.rotation.y += 0.005;
  });

  // typed positions to avoid TypeScript errors
  const positions: [number, number, number][] = [
    [3, 0, 0],
    [-3, 0, 0],
    [0, 3, 0],
    [0, -3, 0],
    [2.1, 2.1, 0],
    [-2.1, -2.1, 0],
  ];

  return (
    <group ref={groupRef}>
      {/* Central Sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#805AD5" />
      </mesh>

      {/* Orbiting Spheres */}
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#F6E05E" />
        </mesh>
      ))}
    </group>
  );
});
