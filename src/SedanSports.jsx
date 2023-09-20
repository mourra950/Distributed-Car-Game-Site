import { useGLTF } from '@react-three/drei'
export default function Model(props) {
  const { nodes, materials } = useGLTF('./sedanSports.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.2, 0]}>
        <mesh geometry={nodes.Mesh_body.geometry} material={materials.plastic} />
        <mesh geometry={nodes.Mesh_body_1.geometry} material={materials.carTire} />
        <mesh geometry={nodes.Mesh_body_2.geometry} material={materials.paintRed} />
        <mesh geometry={nodes.Mesh_body_3.geometry} material={materials._defaultMat} />
        <mesh geometry={nodes.Mesh_body_4.geometry} material={materials.window} />
        <mesh geometry={nodes.Mesh_body_5.geometry} material={materials.lightBack} />
        <mesh geometry={nodes.Mesh_body_6.geometry} material={materials.lightFront} />
        <group position={[0, 0.4, 1.069]}>
          <mesh geometry={nodes.Mesh_spoiler.geometry} material={materials.carTire} />
          <mesh geometry={nodes.Mesh_spoiler_1.geometry} material={materials.paintRed} />
        </group>
      </group>
      <group position={[-0.3, 0.3, 0.66]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Mesh_wheel_frontLeft.geometry} material={materials.carTire} />
        <mesh geometry={nodes.Mesh_wheel_frontLeft_1.geometry} material={materials.wheelInside} />
        <mesh geometry={nodes.Mesh_wheel_frontLeft_2.geometry} material={materials._defaultMat} />
      </group>
      <group position={[0.3, 0.3, 0.66]}>
        <mesh geometry={nodes.Mesh_wheel_frontLeft.geometry} material={materials.carTire} />
        <mesh geometry={nodes.Mesh_wheel_frontLeft_1.geometry} material={materials.wheelInside} />
        <mesh geometry={nodes.Mesh_wheel_frontLeft_2.geometry} material={materials._defaultMat} />
      </group>
      <group position={[-0.3, 0.3, -0.66]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Mesh_wheel_frontLeft.geometry} material={materials.carTire} />
        <mesh geometry={nodes.Mesh_wheel_frontLeft_1.geometry} material={materials.wheelInside} />
        <mesh geometry={nodes.Mesh_wheel_frontLeft_2.geometry} material={materials._defaultMat} />
      </group>
      <group position={[0.3, 0.3, -0.66]}>
        <mesh geometry={nodes.Mesh_wheel_frontLeft.geometry} material={materials.carTire} />
        <mesh geometry={nodes.Mesh_wheel_frontLeft_1.geometry} material={materials.wheelInside} />
        <mesh geometry={nodes.Mesh_wheel_frontLeft_2.geometry} material={materials._defaultMat} />
      </group>
    </group>
  )
}

useGLTF.preload('/sedanSports.glb')

export{Model}