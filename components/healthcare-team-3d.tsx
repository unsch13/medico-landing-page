"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text3D, Html } from "@react-three/drei"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function AnimatedPerson({
  position,
  color,
  scale = 1,
  animationOffset = 0,
}: {
  position: [number, number, number]
  color: string
  scale?: number
  animationOffset?: number
}) {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + animationOffset) * 0.1
      // Subtle rotation for "working" movement
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + animationOffset) * 0.1
    }
  })

  return (
    <group
      ref={meshRef}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 1.2, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Lab coat/uniform */}
      <mesh position={[0, 0.1, 0.1]}>
        <boxGeometry args={[0.7, 1.0, 0.1]} />
        <meshStandardMaterial color="white" transparent opacity={0.9} />
      </mesh>

      {/* Floating work indicator */}
      {hovered && (
        <Html position={[0, 1.5, 0]} center>
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg text-sm font-medium text-gray-800 border border-gray-200">
            Healthcare Professional
          </div>
        </Html>
      )}
    </group>
  )
}

function MedicalEquipment({ position, type }: { position: [number, number, number]; type: string }) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current && type === "monitor") {
      // Gentle pulsing for monitors
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.02)
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {type === "microscope" && (
        <>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.2, 0.8, 8]} />
            <meshStandardMaterial color="#2c3e50" />
          </mesh>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
            <meshStandardMaterial color="#34495e" />
          </mesh>
        </>
      )}

      {type === "monitor" && (
        <>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.8, 0.5, 0.1]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[0.7, 0.4, 0.02]} />
            <meshStandardMaterial color="#00ff88" emissive="#004422" />
          </mesh>
        </>
      )}

      {type === "table" && (
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.1, 0.8]} />
          <meshStandardMaterial color="#ecf0f1" />
        </mesh>
      )}
    </group>
  )
}

export default function HealthcareTeam3D() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50">
      <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
        <Environment preset="studio" />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#0ea5e9" />

        {/* Healthcare professionals working */}
        <AnimatedPerson position={[-2, 0, 0]} color="#0ea5e9" animationOffset={0} />
        <AnimatedPerson position={[0, 0, -1]} color="#10b981" animationOffset={1} />
        <AnimatedPerson position={[2, 0, 0.5]} color="#8b5cf6" animationOffset={2} />
        <AnimatedPerson position={[1, 0, -2]} color="#f59e0b" scale={0.9} animationOffset={3} />

        {/* Medical equipment */}
        <MedicalEquipment position={[-1.5, -0.6, 0.5]} type="table" />
        <MedicalEquipment position={[-1.3, -0.1, 0.5]} type="microscope" />
        <MedicalEquipment position={[1.5, 0.5, -1.5]} type="monitor" />
        <MedicalEquipment position={[2.5, -0.6, 0]} type="table" />

        {/* Floating medical symbols */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[-3, 2, 1]}>
            <torusGeometry args={[0.2, 0.05, 8, 16]} />
            <meshStandardMaterial color="#ef4444" emissive="#220000" />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh position={[3, 2.5, -1]}>
            <boxGeometry args={[0.3, 0.05, 0.05]} />
            <meshStandardMaterial color="#22c55e" emissive="#002200" />
          </mesh>
        </Float>

        {/* 3D Text */}
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
          <Text3D position={[0, 3, 0]} font="/fonts/Inter_Bold.json" size={0.3} height={0.05} curveSegments={12}>
            Healthcare Excellence
            <meshStandardMaterial color="#0ea5e9" />
          </Text3D>
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}
