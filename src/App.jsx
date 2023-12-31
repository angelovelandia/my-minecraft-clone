import { Canvas } from "@react-three/fiber"
import { Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"

import Ground from "./components/Ground"
import Fpv from "./components/Fpv"
import Player from "./components/Player"
import Cubes from "./components/Cubes"
import TextureSelect from "./components/TextureSelect"

export default function App(){
    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                <Fpv />
                <Physics>
                    <Cubes />
                    <Player />
                    <Ground />
                </Physics>
            </Canvas>
            <div className="pointer">+</div>
            <TextureSelect />
        </>
    )
}