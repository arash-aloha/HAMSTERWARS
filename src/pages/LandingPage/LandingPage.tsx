import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { requestCutest } from '../../components/async/async';
import { HamsterObject } from '../../TS-models/models';

import './LandingPage.css'

const LandingPage = () => {

    const [cutest, setCutest] = useState<null | HamsterObject[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [noResponse, setNoResponse] = useState<boolean>(false);

    useEffect(() => {
        async function getFetch(url:string) {
            await requestCutest(url, setCutest, setIsLoading, setNoResponse);
        }
        getFetch('/hamsters/cutest');
        console.log('Sent API request /Cutest.');
    }, [setCutest]);
    
    return (
        <section className="container-landingpage">
            {noResponse && (<h4 className="error-landingpage"> Could not reach the server... Please try again later. </h4>)}
            {isLoading && (<h4 className="error-landingpage"> Loading page... </h4>)}
            {cutest?.map(hamster =>
            <div className="landingPage-content" key={hamster.id} >
                <h2> Welcome to HAMSTER WARS! </h2>
                  <h2> If you LOVE <span className="cutest">cute</span> hamsters, this is the place to be. </h2>
                <h3> May the <span className="cutest">cutest</span> hamster win. Let the games begin </h3>
                <Link to="/home">
                    <p>{hamster.name}</p>
                    <figure className="landingPage-img-container">
                    {hamster.imgName.startsWith('hamster') 
                    ? <img src={`/img/${hamster.imgName}`} alt={hamster.name} />
                    : <img src={hamster.imgName} alt={hamster.name} />
                    }
                    </figure>
                </Link>
            </div>)
            }
        </section>

    )
}

export default LandingPage;