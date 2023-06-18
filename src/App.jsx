import React, { useRef, useState } from 'react'
import { Button, Layout } from 'antd'
const { Header, Content, Footer, Sider } = Layout;
import { Canvas, useFrame } from '@react-three/fiber'
import { PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'
import ReactAudioPlayer from 'react-audio-player'
import "./index.css"
import { Model } from './SedanSports'
import FirstSection from './firstsection';
import ModelSection from './modelsection';
import AboutSection from './AboutSection';

function App() {
  const audio = useRef(null)
  // Set up state for the hovered and active state
  const [show, setshow] = useState(false)
  const handleClick = () => {
    if (audio.current) {
      audio.current.audioEl.current.play();
    }
  };
  return (

    <>
      <div>
        <ReactAudioPlayer
          ref={audio}
          id="audio-player"
          src="./mario.mp3"
          controls
          loop
        />
      </div>
      <Layout>
        <Header>
          <Button>Game</Button>
          <Button>How to Play</Button>
          <Button>Download</Button>
          <Button>Credits</Button>
        </Header>
        <Layout>
          <Content>
            <ModelSection />
            <FirstSection />
            <AboutSection />

          </Content>

        </Layout>
        <Footer>footer</Footer>

      </Layout>
      {/*
      <div hidden={!show}>
        {!show &&
          <button onClick={() => {
            setshow(true);
            handleClick()
          }}>
            click me</button>
        }
        <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>

          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} />
          <PresentationControls

            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <Model rotation={[0.4, 2.2, 0]} position={[0, 0.25, 0]} scale={1} />
          </PresentationControls>
          <Html>ahmed</Html>
          <Environment preset="city" />
        </Canvas>
      
      </div>*/}
    </>
  )
}
export default App



/*

 const audio = useRef(null)
  // Set up state for the hovered and active state
  const [show, setshow] = useState(false)
  const handleClick = () => {
    if (audio.current) {
      audio.current.audioEl.current.play();
    }
  };
llllllllll
{!show &&
      <button onClick={() => {
        setshow(true);

        handleClick()
      }
      } >click me</button>
    }
      <div>
        <ReactAudioPlayer
          ref={audio}
          id="audio-player"
          src="./mario.mp3"
          controls
          loop
        />
      </div>
      <div hidden={!show}>
        <Canvas  camera={{ position: [0, 0, 10], fov: 25 }}>

          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048}  />
          <PresentationControls

            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <Model rotation={[0.4, 2.2, 0]} position={[0, 0.25, 0]} scale={1} />
          </PresentationControls>
          <Html>ahmed</Html>
          <Environment preset="city" />
        </Canvas>

      </div>

*/