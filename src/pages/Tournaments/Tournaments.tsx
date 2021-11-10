import { useEffect, useState } from "react"
import { requestTournament } from "../../components/async/async"
import { HamsterObject } from "../../TS-models/models"

import './Tournaments.css'
import { GiCrossedSwords } from 'react-icons/gi'

const Tournaments = () => {

    
/*    
Tävla
1. CHECK - När battle-vyn visas ska du slumpa två hamstrar, som visas för användaren.          

    Användaren ska klicka för att rösta på den sötaste. Man ska kunna se bild och namn för varje hamster. 
    När man har röstat ska mer information om hamstern visas, bland annat hur många vinster och förluster den har. (Det kan påverka hur man röstar!)

2. När användaren klickar ska båda hamster-objekten uppdateras: vinnaren får +1 vinst och förloraren +1 förlust. Nu ska du visa hur många vinster och förluster respektive hamster har. Användaren ska få möjligheten att starta en ny match, med två slumpade hamstrar.
*/

//sätt vinner i recoil state

    const [hamsters, setHamsters] = useState<null | HamsterObject[]>(null);
    const [winner, setWinner] = useState<null | HamsterObject>(null)
    const [loser, setLoser] = useState<null | HamsterObject>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [noResponse, setNoResponse] = useState<boolean>(false);


    useEffect(() => {
        async function getFetch(url:string) {
            await requestTournament(url, setHamsters, setIsLoading, setNoResponse);
        }
        getFetch('/hamsters/random');
        console.log('Send API request /Random.');
    }, [setHamsters]);


    //set rivals: winner - loser
    const handleRivals = (hamster:HamsterObject) => {
        setWinner(hamster)

        if( !hamsters ) { 
            return 
        }
        if ( hamster.id === hamsters[0].id ) {
            setLoser(hamsters[1]) 
        } else {
            setLoser(hamsters[0])  
        } 
	}
    
    
    async function handlePUT(winner:HamsterObject) {
        
        if ( winner.id === winner.id ) {
            console.log('handlePUT', winner)
            await fetch(`/hamsters/${winner.id}`,{
                method: 'PUT',
                body: JSON.stringify({ wins: winner.wins + 1, games: winner.games + 1 }),
                headers: {'Content-Type': 'application/json'}
            });
                await fetch(`/hamsters/${loser?.id}`, {
                method: 'PUT',
                body: JSON.stringify({ defeats: loser!.defeats + 1, games: loser!.games + 1 }),
                headers: {'Content-Type': 'application/json'}
                });
            }
        }




    return (
        <main className="tournament-container">
            {noResponse && (<h4 className="tournament-error"> Could not reach the server... Please try again later. </h4>)}
            {isLoading && (<h4 className="tournament-error"> Loading page... </h4>)}
            {hamsters &&
                (<aside className="para"> 
                    <p><span className="italic"> HAMSTER TOURNAMENT </span></p><br />
                    <p> put your vote on the  <span className="cutest"> cutest</span>hamster! </p>
                </aside>) 
            }
            <div className="rival-container">
            <span className="tournament-icon"><GiCrossedSwords /></span>
            { hamsters && 
                hamsters.map(hamster =>
                <article className="contestants" key={hamster.id}
                    onClick={() => handleRivals(hamster)} 
                >
                    <figure className="contestants-img-container">
                        <img src={`/img/${hamster.imgName}`} alt="contestants" />
                    <p>name: {hamster.name}</p>
                    </figure>
                </article>)
            }
            {winner && loser 
            ?   <aside className="stats"> 
                        <p>The winner is: {winner.name}</p>
                        <p> Stats: </p>
                        <p> Games: {winner.games} </p>
                        <p> Wins: {winner.wins} </p>
                        <p> Defeats: {winner.defeats} </p>
                        <p> Loves: {winner.loves} </p>
                        <p> Favourite food: {winner.favFood} </p>
                </aside>
            : null 
            }           
            </div>

        </main>
    )
}

export default Tournaments