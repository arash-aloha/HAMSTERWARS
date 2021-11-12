import { useEffect, useState } from "react"
import { requestTournament } from "../../components/async/async"
import { HamsterObject } from "../../TS-models/models"


import './Tournaments.css'
import { GiCrossedSwords } from 'react-icons/gi'
import Rivals from "../../components/Tournaments/Rivals"

const Tournaments = () => {

    const [hamster1, setHamster1] = useState<null | HamsterObject>(null);
    const [hamster2, setHamster2] = useState<null | HamsterObject>(null);
    const [winner, setWinner] = useState<null | HamsterObject>(null)
    const [loser, setLoser] = useState<null | HamsterObject>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [noResponse, setNoResponse] = useState<boolean>(false);
    const [winnerSlide, setWinnerSlide] = useState(false)
    const [loserSlide, setLoserSlide] = useState(false)

    useEffect(() => {
        async function getFetch(url:string) {
            await requestTournament(url, setHamster1, setHamster2, setIsLoading, setNoResponse);
        }
        getFetch('/hamsters/random');
        console.log('Send API request /Random.');
    }, []);
    
   
    async function handlePUT(winner:HamsterObject, loser:HamsterObject) {     
        await fetch(`/hamsters/${winner.id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                  wins: winner.wins + 1, 
                  games: winner.games + 1 
                })
            });
        await fetch(`/hamsters/${loser.id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    defeats: loser.defeats + 1, 
                    wins: loser.wins,
                    games: loser.games + 1 
                })
            });
        BattleResults(winner, loser)
    }

    async function newGame() {
        const url = '/hamsters/random'
        const response1 = await fetch(url);
        let response2 = await fetch(url);

        if (!response1.ok || !response2.ok) {
            throw Error('Could not fetch data for that resource.');
        }
        const data1 = await response1.json();
        let data2 = await response2.json();

        if ( data1.id === data2.id ) {
            response2 = await fetch(url);
            data2 = await response1.json();
        }
        setHamster1(data1)
        setHamster2(data2)
    }

    async function BattleResults(winner:HamsterObject, loser:HamsterObject) {
        const responseWinner = await fetch(`/hamsters/${winner.id}`);
        const dataWinner = await responseWinner.json();
        const responseLoser = await fetch(`/hamsters/${loser.id}`);
        const dataLoser = await responseLoser.json();
        setWinner(dataWinner)
        setLoser(dataLoser)
        setWinnerSlide(true)
        setLoserSlide(true)
    }
    
    const winnerClass = winner && winnerSlide ? 'stats-winner' : '';
    const loserClass = loser && loserSlide ? 'stats-loser' : '';

    return (
        <main className="tournament-container">
            {noResponse && (<h4 className="tournament-error"> Could not reach the server... Please try again later. </h4>)}
            {isLoading && (<h4 className="tournament-error"> Loading page... </h4>)}
            {hamster1 &&
                (<aside className="para"> 
                    <p><span className="italic"> HAMSTER TOURNAMENT </span></p><br />
                    <p> put your vote on the  <span className="cutest"> cutest</span>hamster! </p>
                </aside>) 
            }
            <div className="rival-container">
            <span className="tournament-icon" 
                onClick={ newGame } >
                <GiCrossedSwords />
            </span> 
                <p className="tournament-icon-p" onClick={ newGame }> new game </p>
            {   hamster1 
                && hamster2 
                && <Rivals hamster1={hamster1} 
                            hamster2={hamster2} 
                            handlePUT={handlePUT} 

                    /> 
            }

                {winner && winnerSlide
                ?   <aside className={winnerClass}> 
                            <p>The winner is: {winner.name}</p>
                            <p> Stats: </p>
                            <p> Games: {winner.games} </p>
                            <p> Wins: {winner.wins} </p>
                            <p> Defeats: {winner.defeats} </p>
                            <p> Loves: {winner.loves} </p>
                            <p> Favourite food: {winner.favFood} </p>
                    </aside>
                : null}       
                {loser && loserSlide
                ?   <aside className={loserClass}> 
                            <p>The loser is: {loser.name}</p>
                            <p> Stats: </p>
                            <p> Games: {loser.games} </p>
                            <p> Wins: {loser.wins} </p>
                            <p> Defeats: {loser.defeats} </p>
                            <p> Loves: {loser.loves} </p>
                            <p> Favourite food: {loser.favFood} </p>
                    </aside>
                : null}
            </div>

        </main>
    )
}

export default Tournaments
