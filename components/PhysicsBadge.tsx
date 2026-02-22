'use client'
import { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import {
  BallCollider, CuboidCollider, Physics,
  RigidBody, useRopeJoint, useSphericalJoint,
} from '@react-three/rapier'
import {
  Environment, Lightformer,
  RenderTexture, PerspectiveCamera, Text,
} from '@react-three/drei'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import * as THREE from 'three'

extend({ MeshLineGeometry, MeshLineMaterial })

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any
    meshLineMaterial: any
  }
}

// ─── EDIT YOUR INFO HERE ─────────────────────────────────────────────────────
const NAME      = 'Your Name'           // ← change me
const ROLE      = 'he / him'            // ← change me
const LOCATION  = 'Mumbai, IN'          // ← change me
const PHOTO_URL = 'https://i.pravatar.cc/300?img=11'  // ← swap with your local path e.g. '/me.jpg'
// ─────────────────────────────────────────────────────────────────────────────

// ── Card texture (RenderTexture — Vercel technique) ───────────────────────────
function CardFace() {
  // Load photo texture
  const [photoTex, setPhotoTex] = useState<THREE.Texture | null>(null)
  useEffect(() => {
    const loader = new THREE.TextureLoader()
    loader.load(PHOTO_URL, (t) => setPhotoTex(t))
  }, [])

  const info: [string, string, number, number][] = [
    ['ROLE',      'AI/ML Engineer',  -1.28, -1.55],
    ['LOCATION',  LOCATION,           0.1,  -1.55],
    ['PRONOUNS',  ROLE,              -1.28, -1.88],
    ['AVAILABLE', 'For Work ✦',       0.1,  -1.88],
  ]

  return (
    <>
      <PerspectiveCamera makeDefault manual position={[0, 0, 5]} />

      {/* ── full card bg ── */}
      <mesh position={[0, 0, -0.2]}>
        <planeGeometry args={[3.2, 4.8]} />
        <meshBasicMaterial color="#0a0a0a" />
      </mesh>

      {/* ── poster black top ── */}
      <mesh position={[0, 1.1, -0.1]}>
        <planeGeometry args={[3.2, 2.6]} />
        <meshBasicMaterial color="#000" />
      </mesh>

      {/* ── scanlines ── */}
      {Array.from({ length: 22 }).map((_, i) => (
        <mesh key={i} position={[0, 2.15 - i * 0.22, 0]}>
          <planeGeometry args={[3.2, 0.07]} />
          <meshBasicMaterial color="#fff" transparent opacity={0.009} />
        </mesh>
      ))}

      {/* ── header ── */}
      <Text position={[-1.28, 2.12, 0.01]} fontSize={0.11} color="#fff" letterSpacing={0.08} anchorX="left" anchorY="middle">
        ▲  PORTFOLIO
      </Text>
      <Text position={[1.28, 2.12, 0.01]} fontSize={0.08} color="rgba(255,255,255,0.3)" letterSpacing={0.08} anchorX="right" anchorY="middle">
        2026 · V1.0
      </Text>

      {/* ── BIG TYPE: AI/ML ── */}
      <Text position={[0.18, 1.52, 0.01]} fontSize={0.76} color="#fff" letterSpacing={0.05} anchorX="center" anchorY="middle">
        AI/ML
      </Text>

      {/* ── SOFTWARE ghost ── */}
      <Text position={[0, 0.88, 0.01]} fontSize={0.25} color="rgba(255,255,255,0.25)" letterSpacing={0.18} anchorX="center" anchorY="middle">
        SOFTWARE
      </Text>

      {/* ── ENGINEER ── */}
      <Text position={[0, 0.38, 0.01]} fontSize={0.44} color="#fff" letterSpacing={0.04} anchorX="center" anchorY="middle">
        ENGINEER
      </Text>

      {/* ── fade gradient poster → badge ── */}
      {[0.92, 0.75, 0.55, 0.38, 0.22, 0.12, 0.05].map((op, i) => (
        <mesh key={i} position={[0, -0.06 - i * 0.13, 0.02]}>
          <planeGeometry args={[3.2, 0.15]} />
          <meshBasicMaterial color="#0a0a0a" transparent opacity={op} />
        </mesh>
      ))}

      {/* ── PHOTO (circle-ish, left side) ── */}
      {photoTex ? (
        <mesh position={[-0.72, -0.1, 0.05]}>
          <circleGeometry args={[0.52, 48]} />
          <meshBasicMaterial map={photoTex} />
        </mesh>
      ) : (
        // placeholder silhouette
        <group position={[-0.72, -0.1, 0.05]}>
          <mesh>
            <circleGeometry args={[0.52, 48]} />
            <meshBasicMaterial color="#1a1a1a" />
          </mesh>
          <Text position={[0, 0, 0.01]} fontSize={0.22} color="rgba(255,255,255,0.15)" anchorX="center" anchorY="middle">
            YN
          </Text>
        </group>
      )}
      {/* photo ring */}
      <mesh position={[-0.72, -0.1, 0.04]}>
        <ringGeometry args={[0.52, 0.56, 48]} />
        <meshBasicMaterial color="rgba(255,255,255,0.12)" />
      </mesh>

      {/* ── name + pill (right of photo) ── */}
      <Text position={[0.3, 0.1, 0.05]} fontSize={0.22} color="#fff" anchorX="left" anchorY="middle">
        {NAME}
      </Text>
      <Text position={[0.3, -0.16, 0.05]} fontSize={0.10} color="rgba(255,255,255,0.36)" anchorX="left" anchorY="middle">
        {ROLE}
      </Text>

      {/* "Nice to meet u!" pill */}
      <mesh position={[0.88, -0.44, 0.05]}>
        <planeGeometry args={[0.88, 0.2]} />
        <meshBasicMaterial color="#fff" />
      </mesh>
      <Text position={[0.88, -0.44, 0.06]} fontSize={0.068} color="#000" letterSpacing={0.07} anchorX="center" anchorY="middle">
        NICE TO MEET U!
      </Text>

      {/* VIRTUAL ATTENDEE */}
      <Text position={[-1.28, -0.6, 0.05]} fontSize={0.07} color="rgba(255,255,255,0.2)" letterSpacing={0.14} anchorX="left" anchorY="middle">
        VIRTUAL ATTENDEE
      </Text>
      <mesh position={[1.06, -0.6, 0.05]}>
        <planeGeometry args={[0.28, 0.1]} />
        <meshBasicMaterial color="#fff" />
      </mesh>

      {/* ── divider ── */}
      <mesh position={[0, -0.78, 0.05]}>
        <planeGeometry args={[2.8, 0.006]} />
        <meshBasicMaterial color="#fff" transparent opacity={0.1} />
      </mesh>

      {/* ── info grid ── */}
      {info.map(([label, value, x, y]) => (
        <group key={label}>
          <Text position={[x, y, 0.05]} fontSize={0.072} color="rgba(255,255,255,0.22)" letterSpacing={0.12} anchorX="left" anchorY="middle">
            {label}
          </Text>
          <Text position={[x, y - 0.18, 0.05]} fontSize={0.12} color="rgba(255,255,255,0.82)" anchorX="left" anchorY="middle">
            {value}
          </Text>
        </group>
      ))}

      {/* ── footer ── */}
      <mesh position={[0, -2.2, 0.04]}>
        <planeGeometry args={[3.2, 0.26]} />
        <meshBasicMaterial color="#111" />
      </mesh>
      <Text position={[-1.28, -2.2, 0.05]} fontSize={0.072} color="rgba(255,255,255,0.2)" letterSpacing={0.1} anchorX="left" anchorY="middle">
        PORTFOLIO.DEV / SHIP
      </Text>
      <mesh position={[1.06, -2.2, 0.05]}>
        <planeGeometry args={[0.26, 0.09]} />
        <meshBasicMaterial color="#fff" />
      </mesh>
    </>
  )
}

// ── Band — exact Vercel rope physics ─────────────────────────────────────────
function Band({ maxSpeed = 50, minSpeed = 10 }: { maxSpeed?: number; minSpeed?: number }) {
  const band  = useRef<any>()
  const fixed = useRef<any>()
  const j1 = useRef<any>(), j2 = useRef<any>(), j3 = useRef<any>()
  const card  = useRef<any>()

  const vec = new THREE.Vector3(), ang = new THREE.Vector3()
  const rot = new THREE.Vector3(), dir = new THREE.Vector3()

  const seg = {
    type: 'dynamic' as const, canSleep: true,
    colliders: false as any, angularDamping: 2, linearDamping: 2,
  }

  const { width, height } = useThree(s => s.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), new THREE.Vector3(),
    new THREE.Vector3(), new THREE.Vector3(),
  ]))
  const [dragged, drag] = useState<THREE.Vector3 | false>(false)
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1,   j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2,   j3, [[0, 0, 0], [0, 0, 0], 1])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach(r => r.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - (dragged as THREE.Vector3).x,
        y: vec.y - (dragged as THREE.Vector3).y,
        z: vec.z - (dragged as THREE.Vector3).z,
      })
    }
    if (fixed.current) {
      ;[j1, j2].forEach(r => {
        if (!r.current.lerped)
          r.current.lerped = new THREE.Vector3().copy(r.current.translation())
        const d = Math.max(0.1, Math.min(1, r.current.lerped.distanceTo(r.current.translation())))
        r.current.lerped.lerp(r.current.translation(), delta * (minSpeed + d * (maxSpeed - minSpeed)))
      })
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped ?? j2.current.translation())
      curve.points[2].copy(j1.current.lerped ?? j1.current.translation())
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }
  })

  curve.curveType = 'chordal'

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...seg} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...seg}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1,   0, 0]} ref={j2} {...seg}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...seg}><BallCollider args={[0.1]} /></RigidBody>

        <RigidBody
          position={[2, 0, 0]} ref={card} {...seg}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          {/* collider sized to match scaled card */}
          <CuboidCollider args={[0.72, 1.0, 0.01]} />
          <group
            scale={1.8}                   // ← smaller card scale
            position={[0, -1.05, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e: any) => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            {/* Front */}
            <mesh castShadow>
              <planeGeometry args={[1.6, 2.25]} />
              <meshPhysicalMaterial clearcoat={1} clearcoatRoughness={0.12} roughness={0.25} metalness={0.4}>
                <RenderTexture attach="map" width={512} height={720} anisotropy={16}>
                  <CardFace />
                </RenderTexture>
              </meshPhysicalMaterial>
            </mesh>

            {/* Back */}
            <mesh rotation-y={Math.PI}>
              <planeGeometry args={[1.6, 2.25]} />
              <meshPhysicalMaterial color="#0d0d0d" roughness={0.5} metalness={0.1} clearcoat={0.4} />
            </mesh>

            {/* Metal clip ring */}
            <mesh position={[0, 1.22, 0.01]} castShadow>
              <torusGeometry args={[0.1, 0.028, 16, 32]} />
              <meshPhysicalMaterial color="#c8c8c8" metalness={0.98} roughness={0.08} />
            </mesh>
          </group>
        </RigidBody>
      </group>

      {/* Rope */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#666"
          depthTest={false}
          resolution={[width, height]}
          lineWidth={0.9}
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  )
}

// ── Export ────────────────────────────────────────────────────────────────────
export default function PhysicsBadge() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/*
        Camera fov=18 (narrower than Vercel's 25) → card appears smaller on load
        position z=13 keeps it far enough that card fits inside viewport
      */}
      <Canvas camera={{ position: [0, 0, 13], fov: 18 }}>
        <ambientLight intensity={Math.PI * 0.5} />
        <Suspense fallback={null}>
          <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
            <Band />
          </Physics>
          <Environment resolution={256}>
            <Lightformer intensity={2}  color="white" position={[0, -1, 5]}   rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3}  color="white" position={[-1, -1, 1]}  rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3}  color="white" position={[1, 1, 1]}    rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={8}  color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  )
}