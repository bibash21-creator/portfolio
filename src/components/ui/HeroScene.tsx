'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null!);
  const { mouse } = useThree();
  
  // Generate random positions for the points (denser cloud)
  const sphere = useMemo(() => {
    const positions = new Float32Array(8000 * 3);
    for (let i = 0; i < 8000; i++) {
      const r = 2.5; 
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    // Continuous rotation
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 18;
    
    // Mouse Parallax
    ref.current.rotation.x += (mouse.y * 0.1 - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (mouse.x * 0.1 - ref.current.rotation.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.6, 1]} />
        <MeshDistortMaterial
          color="#ec4899"
          speed={3}
          distort={0.4}
          radius={0.6}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 bg-transparent">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={1} />
        <ParticleSystem />
        <FloatingCore />
      </Canvas>
    </div>
  );
}
