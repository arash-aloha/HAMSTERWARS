import { HamsterObject } from '../../TS-models/models';
import Card from './Card';
import '../../pages/Gallery/GalleryPage.css'


interface CardGridProps {
    filterHamsters: HamsterObject[];
}

const CardGrid = ({ filterHamsters }: CardGridProps) => {

    return (
        <section className="gallery grid-container">
        {filterHamsters?.map(object => (
            <Card key={object.id} object={object}/>
        ))}
        </section>
    )
}

export default CardGrid