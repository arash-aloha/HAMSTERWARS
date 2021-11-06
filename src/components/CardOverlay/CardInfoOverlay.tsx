import { HamsterObject } from '../../TS-models/models'
import './CardInfoOverlay.css'

interface CardInfoOverlayProps {
    object: HamsterObject;
}

const CardInfoOverlay = ({ object }: CardInfoOverlayProps ) => {
    return (
        <div className="gallery-overlay">
            <figure className="card-figure-container">
                <div className="hamster-info-container">
                    <p className="hamster-info"> age: {object.age} </p>
                    <p className="hamster-info"> wins: {object.wins} </p>
                    <p className="hamster-info"> defeats: {object.defeats} </p>
                    <button className="btn"> close </button>
                </div>
            </figure>
        </div>
    )
}

export default CardInfoOverlay