'use client'
import { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { Environment, Text } from '@react-three/drei'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import * as THREE from 'three'

extend({ MeshLineGeometry, MeshLineMaterial })

function Band() {
  const band = useRef<any>()
  const fixed = useRef<any>()
  const j1 = useRef<any>(), j2 = useRef<any>(), j3 = useRef<any>()
  const card = useRef<any>()
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3()
  const seg = { type: 'dynamic' as const, canSleep: true, colliders: false as any, angularDamping: 2, linearDamping: 2 }
  const { width, height } = useThree(s => s.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState<THREE.Vector3 | false>(false)
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0,0,0],[0,0,0],1])
  useRopeJoint(j1, j2, [[0,0,0],[0,0,0],1])
  useRopeJoint(j2, j3, [[0,0,0],[0,0,0],1])
  useSphericalJoint(j3, card, [[0,0,0],[0,1.45,0]])

  useEffect(() => {
    if (hovered) { document.body.style.cursor = dragged ? 'grabbing' : 'grab'; return () => void(document.body.style.cursor='auto') }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card,j1,j2,j3,fixed].forEach(r => r.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x-(dragged as THREE.Vector3).x, y: vec.y-(dragged as THREE.Vector3).y, z: vec.z-(dragged as THREE.Vector3).z })
    }
    if (fixed.current) {
      ;[j1,j2].forEach(r => {
        if (!r.current.lerped) r.current.lerped = new THREE.Vector3().copy(r.current.translation())
        const d = Math.max(0.1, Math.min(1, r.current.lerped.distanceTo(r.current.translation())))
        r.current.lerped.lerp(r.current.translation(), delta * (10 + d * 40))
      })
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped || j2.current.translation())
      curve.points[2].copy(j1.current.lerped || j1.current.translation())
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))
      ang.copy(card.current.angvel()); rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y*0.25, z: ang.z })
    }
  })
  curve.curveType = 'chordal'

  return (
    <>
      <group position={[0,4,0]}>
        <RigidBody ref={fixed} {...seg} type="fixed" />
        <RigidBody position={[0.5,0,0]} ref={j1} {...seg}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1,0,0]} ref={j2} {...seg}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1.5,0,0]} ref={j3} {...seg}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[2,0,0]} ref={card} {...seg} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8,1.125,0.01]} />
          <group scale={2.25} position={[0,-1.2,-0.05]}
            onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
            onPointerUp={(e:any) => { e.target.releasePointerCapture(e.pointerId); drag(false) }}
            onPointerDown={(e:any) => { e.target.setPointerCapture(e.pointerId); drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))) }}
          >
            {/* Card white background */}
            <mesh castShadow>
              <boxGeometry args={[1.6, 2.25, 0.04]} />
              <meshPhysicalMaterial color="#f0f0f0" clearcoat={1} clearcoatRoughness={0.1} roughness={0.2} metalness={0} />
            </mesh>
            {/* Black top stripe — lanyard brand */}
            <mesh position={[0, 0.88, 0.025]}>
              <boxGeometry args={[1.6, 0.38, 0.01]} />
              <meshStandardMaterial color="#111" />
            </mesh>
            {/* Company name on stripe */}
            <Text position={[0, 0.88, 0.035]} fontSize={0.09} color="#c8ff00" fontWeight={700} letterSpacing={0.12} anchorX="center" anchorY="middle">
              PORTFOLIO CO.
            </Text>
            {/* Photo area */}
            <mesh position={[0, 0.22, 0.025]}>
              <boxGeometry args={[1.2, 0.95, 0.01]} />
              <meshStandardMaterial color="#ddd" />
            </mesh>
            <Text position={[0, 0.22, 0.035]} fontSize={0.18} color="#999" anchorX="center" anchorY="middle">
              PHOTO
            </Text>
            {/* Pink/accent name bar */}
            <mesh position={[0, -0.4, 0.025]}>
              <boxGeometry args={[1.6, 0.3, 0.01]} />
              <meshStandardMaterial color="#ff6fcf" />
            </mesh>
            <Text position={[0, -0.4, 0.035]} fontSize={0.11} color="#fff" fontWeight={700} letterSpacing={0.04} anchorX="center" anchorY="middle">
              WILLIAM LE
            </Text>
            {/* Role */}
            <Text position={[0, -0.7, 0.025]} fontSize={0.08} color="#888" anchorX="center" anchorY="middle">
              Designer & Developer
            </Text>
            {/* Info row */}
            <Text position={[-0.5, -0.9, 0.025]} fontSize={0.07} color="#aaa" anchorX="left" anchorY="middle">
              NYC
            </Text>
            <Text position={[0.5, -0.9, 0.025]} fontSize={0.07} color="#aaa" anchorX="right" anchorY="middle">
              2024
            </Text>
            {/* Metal clip */}
            <mesh position={[0, 1.2, 0]} castShadow>
              <cylinderGeometry args={[0.055, 0.055, 0.1, 16]} />
              <meshStandardMaterial color="#aaa" metalness={0.95} roughness={0.05} />
            </mesh>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="#111" depthTest={false} resolution={[width, height]} lineWidth={0.7} />
      </mesh>
    </>
  )
}

export default function PhysicsBadge() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0,0,13], fov: 25 }}>
        <ambientLight intensity={Math.PI * 0.6} />
        <directionalLight position={[5,5,5]} intensity={0.8} />
        <Suspense fallback={null}>
          <Physics interpolate gravity={[0,-40,0]} timeStep={1/60}>
            <Band />
          </Physics>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
