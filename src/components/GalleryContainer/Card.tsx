import { useState } from "react";
import { HamsterObject } from "../../TS-models/models"

import CardInfoOverlay from "../CardOverlay/CardInfoOverlay";

import '../../pages/Gallery/GalleryPage.css'


interface CardProps {
    object: HamsterObject;
}

const Card = ({ object }: CardProps) => {

    //overlay
    const [showCIOverlay, setShowCIOverlay] = useState<boolean>(false);
    const toggleOverlay = () => {
        setShowCIOverlay(!showCIOverlay) 
    };

    return (
        <>
            <figure
                onClick={() => console.log('clicked on object id: ', object.id)}
                key={object.id} 
                className="hamster-card"
                onMouseEnter={toggleOverlay}
                onMouseLeave={toggleOverlay}
            >
                <div className="hamster-img-container" key={object.id}>
                    <img src={`/img/${object.imgName}`} alt={object.name} />
                    <p className="name">{object.name.toUpperCase()}</p>
                    { showCIOverlay && <CardInfoOverlay object={object} /> }
                </div>
            </figure>
            
        </>
    )
}

export default Card