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
                    <p className="hamster-info"> games: {object.games} </p>
                    <p className="hamster-info"> wins: {object.wins} </p>
                    <p className="hamster-info"> defeats: {object.defeats} </p>
                </div>
            </figure>
        </div>
    )
}

export default CardInfoOverlay