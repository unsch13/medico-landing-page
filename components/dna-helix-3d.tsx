"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Cylinder } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function DNAHelix() {
  const helixRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  const createHelixPoints = () => {
    const points = []
    const height = 4
    const radius = 0.8
    const turns = 2
    const pointsPerTurn = 20

    for (let i = 0; i < turns * pointsPerTurn; i++) {
      const angle = (i / pointsPerTurn) * Math.PI * 2
      const y = (i / (turns * pointsPerTurn)) * height - height / 2

      // First strand
      const x1 = Math.cos(angle) * radius
      const z1 = Math.sin(angle) * radius

      // Second strand (opposite)
      const x2 = Math.cos(angle + Math.PI) * radius
      const z2 = Math.sin(angle + Math.PI) * radius

      points.push({ x: x1, y, z: z1, color: "#3b82f6" })
      points.push({ x: x2, y, z: z2, color: "#ef4444" })

      // Base pairs (connecting lines)
      if (i % 3 === 0) {
        points.push({
          x: (x1 + x2) / 2,
          y,
          z: (z1 + z2) / 2,
          color: "#22c55e",
          isBase: true,
          x1,
          z1,
          x2,
          z2,
        })
      }
    }

    return points
  }

  const points = createHelixPoints()

  return (
    <group ref={helixRef}>
      {points.map((point, index) => (
        <group key={index}>
          {point.isBase ? (
            <>
              {/* Base pair connection */}
              <Cylinder
                args={[0.02, 0.02, Math.sqrt((point.x2 - point.x1) ** 2 + (point.z2 - point.z1) ** 2)]}
                position={[point.x, point.y, point.z]}
                rotation={[0, Math.atan2(point.z2 - point.z1, point.x2 - point.x1), Math.PI / 2]}
              >
                <meshStandardMaterial color={point.color} />
              </Cylinder>
            </>
          ) : (
            <Sphere args={[0.08]} position={[point.x, point.y, point.z]}>
              <meshStandardMaterial color={point.color} />
            </Sphere>
          )}
        </group>
      ))}
    </group>
  )
}

export default function DNAHelix3D() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <DNAHelix />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
