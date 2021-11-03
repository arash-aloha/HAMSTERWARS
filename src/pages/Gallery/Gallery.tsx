import { useState, useEffect } from "react"
import { useRecoilState } from "recoil";
import { hamstersState } from "../../State/atoms";

import { HamsterObject } from "../../TS-models/models";
import { sendRequest } from "../../components/async/async";


import './Gallery.css'
import GalleryCard from "../../components/GalleryCard/GalleryCard";

const Gallery = () => {
/*
    Galleri
    1.  Här ska appen visa alla hamstrars namn och bild, i ett CSS grid.

    2. Formuläret ska använda validering. Man ska lägga till och ta bort hamster från galleriet. 

    3. Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.
*/

    const [apiRequest, setApiRequest] = useRecoilState<null | HamsterObject[]>(hamstersState);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [noResponse, setNoResponse] = useState<boolean>(false)

    

    useEffect(() => {
        async function getFetch() {
            await sendRequest(setApiRequest, setIsLoading, setNoResponse)
        }
        getFetch()
        console.log('Sent API request.')
    }, [])


    return (
        <main className="container">
            {noResponse && (<p> Could not reach the server... Please try again later. </p>)}
            {isLoading && (<p> Loading hamsters... </p>)}

            { apiRequest && <GalleryCard /> }
        </main>
    )
}

export default Gallery;