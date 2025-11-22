// components/OrbitingSkills.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'



export default function OrbitingSkillsScene() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={true} />
        <OrbitingSkills />
      </Canvas>
    </div>
  )
}

function OrbitingSkills() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005 // slow orbit
    }
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#805AD5" />
      </mesh>

      {[
        [3, 0, 0],
        [-3, 0, 0],
        [0, 3, 0],
        [0, -3, 0],
        [2.1, 2.1, 0],
        [-2.1, -2.1, 0]
      ].map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#F6E05E" />
        </mesh>
      ))}
    </group>
  )
}