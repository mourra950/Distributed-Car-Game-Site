import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Model } from './SedanSports'
import { Button, Input, QRCode, Space } from 'antd';
import { useGLTF, PresentationControls, Environment, Html, Float, Sparkles, Box } from '@react-three/drei'
export default function ModelSection() {
    const [text, setText] = React.useState('https://ant.design/');

    return (
        <>
            <div className='modeldiv'>
                <Canvas className='modelcanvas' camera={{ position: [0, 0, 10], fov: 25 }}>
                    <Html center className='colbut' >
                        <div className='downloadbutnD' >
                            <Button href='https://drive.google.com/file/d/1Eevfei-Vwml0pyFAz687eggDX29U1RAI/view?usp=drive_link'>
                                Download
                            </Button>
                        </div>
                        <div className='downloadbutnG' >
                            <Button href='https://github.com/mourra950/Distrubited-System-Racing-Cars'>
                                Github Repo
                            </Button>
                        </div>
                        <div className='downloadbutnY' >
                            <Button href='https://youtu.be/XfoahjVGTwg'>
                                Youtube Trailer
                            </Button>
                        </div>
                    </Html>
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
                            <Suspense fallback={
                                <>
                                    <Box material-color="hotpink" />
                                </>
                            }>
                                <Model rotation={[0.4, 2.2, 0]} position={[0, 0.25, 0]} scale={1} />
                            </Suspense>
                        </PresentationControls>
                    </Float>
                    <Sparkles count={100} size={30} scale={7} />
                    <Environment preset="city" />

                </Canvas>

            </div>
        </>
    )
} 