import { useState } from "react";
import { HamsterObject } from "../../TS-models/models"
import { useRecoilState } from "recoil";
import { toggleState, clickedHamsterAtom } from "../../State/atoms";

import CardInfoOverlay from "../CardOverlay/CardInfoOverlay";
import '../../pages/Gallery/GalleryPage.css'

interface CardProps {
    object: HamsterObject;
}

const Card = ({ object }: CardProps) => {

    const [toggle, setToggle] = useRecoilState(toggleState)
    const [, setClickedHamster] = useRecoilState(clickedHamsterAtom)
    //overlay
    const [showCIOverlay, setShowCIOverlay] = useState<boolean>(false);
    const toggleOverlay = () => {
        setShowCIOverlay(!showCIOverlay) 
    };

    const handleClick = () => {
        setClickedHamster(object)
        setToggle(!toggle)
    }

    return (
        <>
            <figure
                onClick={() => handleClick()}
                key={object.id} 
                className="hamster-card"
                onMouseEnter={toggleOverlay}
                onMouseLeave={toggleOverlay}
            >
                <div className="hamster-img-container" key={object.id}>
                    {object.imgName.startsWith('hamster') 
                    ? <img src={`/img/${object.imgName}`} alt={object.name} />
                    : <img src={object.imgName} alt={object.name} />
                    }
                    <p className="name">{object.name.toUpperCase()}</p>
                    { showCIOverlay && <CardInfoOverlay object={object} /> }
                </div>
            </figure>
        </>
    )
}

export default Card