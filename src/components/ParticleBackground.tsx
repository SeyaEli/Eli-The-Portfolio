'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Particles() {
  const ref = useRef<THREE.Points>(null!)
  const particlesCount = 2000
  
  const positions = new Float32Array(particlesCount * 3)
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05
      ref.current.rotation.y -= delta * 0.075
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  )
}
