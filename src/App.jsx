import React, { useRef, useState } from 'react'
import { Layout } from 'antd'
const { Content } = Layout;
import ReactAudioPlayer from 'react-audio-player'
import "./index.css"
import FirstSection from './firstsection';
import ModelSection from './modelsection';
import ProjectDSection from './projectd';


function App() {
  // Set up state for the hovered and active state
  const [show, setshow] = useState(false)
  return (

    <>
      <Layout>
        <Content>
          <ModelSection />
          <ProjectDSection />
          <FirstSection />
        </Content>
      </Layout>
    </>
  )
}
export default App
