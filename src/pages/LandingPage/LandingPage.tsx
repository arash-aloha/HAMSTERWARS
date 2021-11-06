import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCutest } from '../../components/async/async';
import { HamsterObject } from '../../TS-models/models';

import './LandingPage.css'

const LandingPage = () => {

    const [cutest, setCutest] = useState<null | HamsterObject[]>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [noResponse, setNoResponse] = useState<boolean>(false)

    useEffect(() => {
        async function getFetch(url:string) {
            await getCutest(url, setCutest, setIsLoading, setNoResponse)     
        }
        getFetch('/hamsters/cutest')
        console.log('Sent API request /Cutest.')
    }, [setCutest])
    
    return (
        <section className="container landingpage-container">
            {cutest?.map(hamster =>
            <div key={hamster.id}>
                <h2> May the <span className="cutest">cutest</span> hamster win </h2>
                <h3> Let the games begin </h3>
                <Link to="/home">
                    <figure className="img-container">
                        <img src={`/img/${hamster.imgName}`} alt="cutest hamster" />
                    </figure>
                </Link>
            </div>)
            }
        </section>

    )
}

export default LandingPage;