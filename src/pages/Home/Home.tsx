import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { requestCutest } from '../../components/async/async';
import { HamsterObject } from '../../TS-models/models';
import { FaCrown } from 'react-icons/fa'
import './Home.css'

const Home = () => {
    
    const [cutest, setCutest] = useState<null | HamsterObject[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [noResponse, setNoResponse] = useState<boolean>(false);


    useEffect(() => {
        async function getFetch(url:string) {
            await requestCutest(url, setCutest, setIsLoading, setNoResponse);
        }
        getFetch('/hamsters/cutest');
    }, []);
    
    return (
        <main className="homepage-container">
            <section className="homepage-wrapper">
            {noResponse && 
                (<h4 className="error-landingpage"> Could not reach the server... Please try again later. </h4>)}
            {isLoading && 
                (<h4 className="error-landingpage"> Loading page... </h4>)}
            {cutest?.map(hamster =>
            <div className="homepage-content" key={hamster.id}>
                <div>
                    <div>
                        <h3 className="headline"> the <span className="cutest">cutest</span> hamster right now. click on the image to begin the game </h3>
                    </div>
                    <Link to="/cutest">
                        <figure className="homepage-img-container">
                        <FaCrown className="homepageicon"/>
                        <p className="homepageiconname"><span className="cutest">{hamster.name}</span></p>
                        {hamster?.imgName.startsWith('hamster') 
                        ? <img src={`/img/${hamster?.imgName}`} alt={hamster.name} />
                        : <img src={hamster?.imgName} alt={hamster.name} />
                        }
                        </figure>
                    </Link>
                </div>
                <article className="game-info">
                    <h5> this is how the game works </h5><br />
                    <p> you put your vote on the hamster you think is the <span className="cutest">cutest</span>. </p>
                    <p> the cutest hamster will get get the deserved spotlight here! </p>
                </article>
            </div>)
            }
        </section>
        </main>
    )
}

export default Home;