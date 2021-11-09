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
        async function getFetch(url:string) {
            await sendRequest(url, setApiRequest, setIsLoading, setNoResponse)
        }
        getFetch('/hamsters')
        console.log('Sent API request /GETALL.')
    }, [setApiRequest])

    return (
        <main className="gallerypage-container">
            {noResponse && (<h4 className="error"> Could not reach the server... Please try again later. </h4>)}
            {isLoading && (<h4 className="error"> Loading hamsters... </h4>)}
            { apiRequest && <GalleryContainer /> }
        </main>
    )
}

export default GalleryPage;