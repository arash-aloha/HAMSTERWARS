import { useState, useEffect } from "react"
import { useRecoilState } from "recoil";
import { hamstersState } from "../../State/atoms";

import { HamsterObject } from "../../TS-models/models";
import { sendRequest } from "../../components/async/async";


import './GalleryPage.css'
import GalleryContainer from "../../components/GalleryContainer/GalleryContainer";

const GalleryPage = () => {
/*
    Galleri
    1. Check- Här ska appen visa alla hamstrars namn och bild, i ett CSS grid.

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

            { apiRequest && <GalleryContainer /> }
        </main>
    )
}

export default GalleryPage;