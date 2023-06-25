import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures';
import { useStore } from '../hooks/useStore';

function Ground() {

    const [ref] = usePlane(()=> ({
        rotation: [-Math.PI / 2, 0, 0], // x, y, z
        position: [0, -0.5, 0] // x, y, z
    }));

    groundTexture.repeat.set(100, 100);

    const [addCube] = useStore(state => [state.addCube]);

    const handleClickGround = e => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map(n => Math.ceil(n));
        addCube(x, y, z);
    }

    return (
        <mesh ref={ref} onClick={handleClickGround}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' color='green' map={groundTexture} />
        </mesh>
    )
}

export default Ground