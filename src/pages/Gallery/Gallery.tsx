import { useState, useEffect } from "react"

const Gallery = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        sendRequest(setData)
        console.log(data)
    }, [])

    return (
        <main>
            Gallery image page
        </main>
    )
}

async function sendRequest(saveData: any) {
    
    const response = await fetch('/hamsters/cutest');
    const data = await response.json();
    console.log(data)
    saveData(data)
}

export default Gallery;