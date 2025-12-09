/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox, Torus, Environment, Stars, Line, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const ModuleBlock = ({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      // Gentle bobbing
      ref.current.position.y = position[1] + Math.sin(t + delay) * 0.1;
      ref.current.rotation.x = t * 0.1 + delay;
      ref.current.rotation.y = t * 0.15;
    }
  });

  return (
    <RoundedBox ref={ref} args={[1, 1, 1]} radius={0.1} smoothness={4} position={position}>
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.8}
        envMapIntensity={1}
      />
    </RoundedBox>
  );
};

const ConnectionLines = () => {
  const points = [
    new THREE.Vector3(-2, 1, 0),
    new THREE.Vector3(2, 1, 0),
    new THREE.Vector3(0, -2, 0),
    new THREE.Vector3(-2, 1, 0) // close loop
  ]
  return (
    <Line points={points} color="white" lineWidth={1} transparent opacity={0.2} />
  )
}

const AbstractNetwork = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group ref={ref}>
      <Torus args={[3.5, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={2} transparent opacity={0.3} />
      </Torus>
      <Torus args={[5, 0.02, 16, 100]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={1} transparent opacity={0.2} />
      </Torus>
    </group>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#06B6D4" />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          {/* Central Hub */}
          <ModuleBlock position={[0, 0, 0]} color="#3B82F6" delay={0} />

          {/* Satellites */}
          <ModuleBlock position={[-3, 1.5, -1]} color="#64748B" delay={1} />
          <ModuleBlock position={[3, 1, -2]} color="#06B6D4" delay={2} />
          <ModuleBlock position={[-1, -3, -1]} color="#1E293B" delay={3} />
          <ModuleBlock position={[2, -2, 1]} color="#94A3B8" delay={4} />

          <AbstractNetwork />
        </Float>
        {/* <Environment preset="city" /> */}
      </Canvas>
    </div>
  );
};

export const ServerScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 2, 5], fov: 40 }}>
        <ambientLight intensity={1} />
        <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} color="#3B82F6" />
        <pointLight position={[-5, 0, -5]} intensity={0.5} color="#06B6D4" />
        <Suspense fallback={null}>
          <Environment preset="studio" />
        </Suspense>

        <Float rotationIntensity={0.2} floatIntensity={0.2} speed={1}>
          <group position={[0, -1, 0]}>
            {/* Abstract Server Rack / Tech Stack */}
            {[0, 1, 2, 3].map((i) => (
              <RoundedBox key={i} args={[3, 0.4, 3]} radius={0.05} position={[0, i * 0.6, 0]}>
                <meshStandardMaterial color={i === 3 ? "#3B82F6" : "#1E293B"} metalness={0.8} roughness={0.2} />
              </RoundedBox>
            ))}

            {/* Connecting pipes/cables */}
            <Cylinder args={[0.1, 0.1, 4]} position={[-1.2, 1, 1.2]}>
              <meshStandardMaterial color="#06B6D4" metalness={0.5} emissive="#06B6D4" emissiveIntensity={0.2} />
            </Cylinder>
            <Cylinder args={[0.1, 0.1, 4]} position={[1.2, 1, -1.2]}>
              <meshStandardMaterial color="#3B82F6" metalness={0.5} emissive="#3B82F6" emissiveIntensity={0.2} />
            </Cylinder>

            {/* Floating data particles around it */}
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
              <RoundedBox args={[0.2, 0.2, 0.2]} position={[1.5, 2, 0]}><meshStandardMaterial color="#06B6D4" /></RoundedBox>
              <RoundedBox args={[0.2, 0.2, 0.2]} position={[-1.5, 0.5, 1]}><meshStandardMaterial color="#3B82F6" /></RoundedBox>
            </Float>

          </group>
        </Float>

        {/* Subtle grid floor */}
        <gridHelper args={[20, 20, 0x334155, 0x1e293b]} position={[0, -2, 0]} />
      </Canvas>
    </div>
  );
};
