import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Model } from './SedanSports'
import { Button, Input, QRCode, Space } from 'antd';
import { useGLTF, PresentationControls, Environment, ContactShadows, Html, Float, Sparkles } from '@react-three/drei'
export default function ModelSection() {
    const [text, setText] = React.useState('https://ant.design/');

    return (
        <>
            <div className='modeldiv'>
                <Canvas className='modelcanvas' camera={{ position: [0, 0, 10], fov: 25 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} />
                    <Float
                        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
                        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                        floatingRange={[-1, 0]}
                    >
                        <PresentationControls
                            config={{ mass: 2, tension: 500 }}
                            snap={{ mass: 4, tension: 1500 }}
                            rotation={[0, 0.3, 0]}
                            polar={[-Math.PI / 3, Math.PI / 3]}
                            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>

                            <Model rotation={[0.4, 2.2, 0]} position={[0, 0.25, 0]} scale={1} />

                        </PresentationControls>
                    </Float>
                    <Sparkles count={100} size={30} scale={7} />
                    <Environment preset="city" />
                    <Html center >
                        <div className='downloadbutn' >
                            <Button>
                                Download
                            </Button>
                        </div>
                    </Html>
                </Canvas>

            </div>
        </>
    )
} 