import { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';
import * as images from '../images/images';
import { useKeyboard } from '../hooks/useKeyboard';

export default function TextureSelect() {

    const [visible, setVisible] = useState(true);
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture]);

    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard();

    // useEffect(()=>{
    //     const visibilityTimeOut = setTimeout(() => {
    //         setVisible(false);
    //     }, 1200);
    //     setVisible(true);

    //     return ()=> {
    //         clearTimeout(visibilityTimeOut);
    //     }
    // }, [texture])

    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            wood,
            log
        }
        const selectedTexture = Object.entries(options).find(([texture, isEnabled]) => isEnabled ?? texture);
        if(selectedTexture){
            const [textureName] = selectedTexture;
            setTexture(textureName);
        }
    }, [ dirt, grass, glass, wood, log ]);

    if(!visible) return null;
    
    return (
        <div className={`texture-selector`}>
            {
                Object.entries(images).map(([imgKey, img]) => {
                    return (
                        <img 
                            className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                        />
                    )
                })
            }
        </div>
    )
}