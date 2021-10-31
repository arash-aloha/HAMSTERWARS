import { useState, useEffect } from "react"
import { HamsterObject } from "../../TS-models/models";

import './Gallery.css'

const Gallery = () => {
/*
    Galleri
    1.  Här ska appen visa alla hamstrars namn och bild, i ett CSS grid.

    2. Formuläret ska använda validering. Man ska kunna ta bort en hamster från galleriet. 

    3. Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.
*/

    const [apiRequest, setApiRequest] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [noResponse, setNoResponse] = useState(false)


    useEffect(() => {
        sendRequest(setApiRequest, setIsLoading, setNoResponse)
    }, [])

    return (
        <main className="container">
            {isLoading
            ? (<p> Loading hamsters... </p>)
            : noResponse
            ? (<p> Could not reach the server... Please try again later. </p>)
            :
            apiRequest.map(object => (
                <figure>
                    <h1>{object}</h1>
                </figure>
            ))
            }
        </main>
    )
}

async function sendRequest(saveData: any, loading:any, noResponse:any) {
    try {
        const response = await fetch('/hamsters');
        const data = await response.json();
        console.log(data)
        loading(true)
        saveData(data)
    }
    catch {
        console.log("Error: ", Error);
        noResponse(true)
        loading(false)
    }
}

export default Gallery;