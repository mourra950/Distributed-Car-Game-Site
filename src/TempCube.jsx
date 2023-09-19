export default function TempCube() {
    return (
        <>
            <mesh
                {...props}
                scale={active ? 1.5 : 1}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'hotpink'} />
            </mesh>
        </>
    )

}