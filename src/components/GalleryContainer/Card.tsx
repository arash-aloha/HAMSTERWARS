import { HamsterObject } from "../../TS-models/models"
import '../../pages/Gallery/GalleryPage.css'

interface CardProps {
    object: HamsterObject;
}

const Card = ({ object }: CardProps) => {

    return (
            <figure
                key={object.id} 
                className="hamster-card"
                onClick={() => {console.log("click", object.id)}}
            >
                <div className="hamster-img-container" key={object.id}>
                    <img src={`/img/${object.imgName}`} alt={object.name} />
                    <p>{object.name.toUpperCase()}</p>
                </div>
            </figure>
    )
}

export default Card