"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Sphere, Box } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function MedicalEquipment() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Medical microscope representation */}
      <group position={[-2, 0, 0]}>
        <Box args={[0.3, 0.1, 0.3]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#2563eb" />
        </Box>
        <Box args={[0.05, 0.8, 0.05]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#64748b" />
        </Box>
        <Sphere args={[0.15]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#0ea5e9" />
        </Sphere>
      </group>

      {/* Medical pills/capsules */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, 1, 1]}>
          <Sphere args={[0.1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#ef4444" />
          </Sphere>
          <Sphere args={[0.08]} position={[0.3, 0.2, 0]}>
            <meshStandardMaterial color="#22c55e" />
          </Sphere>
          <Sphere args={[0.12]} position={[-0.2, -0.1, 0.2]}>
            <meshStandardMaterial color="#f59e0b" />
          </Sphere>
        </group>
      </Float>

      {/* Medical cross symbol */}
      <group position={[2, 0, 0]}>
        <Box args={[0.6, 0.15, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#dc2626" />
        </Box>
        <Box args={[0.15, 0.6, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#dc2626" />
        </Box>
      </group>

      {/* Floating molecules */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <group position={[1, -1, -1]}>
          <Sphere args={[0.05]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#8b5cf6" />
          </Sphere>
          <Sphere args={[0.03]} position={[0.15, 0, 0]}>
            <meshStandardMaterial color="#06b6d4" />
          </Sphere>
          <Sphere args={[0.04]} position={[-0.1, 0.12, 0]}>
            <meshStandardMaterial color="#f97316" />
          </Sphere>
        </group>
      </Float>
    </group>
  )
}

export default function MedicalScene3D() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Environment preset="studio" />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <MedicalEquipment />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
