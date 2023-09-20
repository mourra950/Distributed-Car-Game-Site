import React, { Suspense, useState } from 'react'
import { Layout } from 'antd'
const { Content } = Layout;
import "./index.css"
import FirstSection from './firstsection';
import ModelSection from './modelsection';
import ProjectDSection from './projectd';


function App() {
  // Set up state for the hovered and active state
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
