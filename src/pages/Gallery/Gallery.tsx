import { useState, useEffect } from "react"
import { HamsterObject } from "../../TS-models/models";
import { sendRequest } from "../../components/async/async";
import './Gallery.css'

const Gallery = () => {
/*
    Galleri
    1.  Här ska appen visa alla hamstrars namn och bild, i ett CSS grid.

    2. Formuläret ska använda validering. Man ska kunna ta bort en hamster från galleriet. 

    3. Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.
*/

    const [apiRequest, setApiRequest] = useState<null | HamsterObject[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [noResponse, setNoResponse] = useState<boolean>(false)


    useEffect(() => {
        sendRequest(setApiRequest, setIsLoading, setNoResponse)
        console.log('Sent API request.')
    }, [])


    return (
        <main className="container">
            {noResponse && (<p> Could not reach the server... Please try again later. </p>)}
            {isLoading && (<p> Loading hamsters... </p>)}
            <section className="gallery grid-container">
                {apiRequest?.map(object => (
                    <figure className="hamster-card" key={object.id}>
                        <img src={`/img/${object.imgName}`} alt={object.name} />
                        <p>{object.name}</p>
                    </figure>
                ))}
            </section>
        </main>
    )
}

export default Gallery;