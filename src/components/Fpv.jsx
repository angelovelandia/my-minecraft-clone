import { useThree } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'

export default function Fpv() {

    const { camera, gl } = useThree();

    return (
        <PointerLockControls 
            args={[camera, gl.domElement]}
        />
    )
}