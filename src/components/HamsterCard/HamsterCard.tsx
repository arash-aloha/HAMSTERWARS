
import { useRecoilState } from 'recoil'
import { clickedHamsterAtom, toggleState, hamstersState } from '../../State/atoms'
import { handleDelete } from '../Remove/Remove'

import './HamsterCard.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { HamsterObject } from '../../TS-models/models'

const HamsterCard = ( ) => {
    const [clickedHamster] = useRecoilState<null | HamsterObject>(clickedHamsterAtom);
    const [toggle, setToggle] = useRecoilState(toggleState)
    const [newHamsterArray, setNewHamsterArray] = useRecoilState<null | HamsterObject[]>(hamstersState)

    return (
    <section className="hamstercard-container" 
    onClick={() => setToggle(!toggle)}>
        
        <article className="hamsterCard">
            <header>
                <h1> Hamster Card </h1>
            </header>
            <section>
                <figure>
                    <p>name: {clickedHamster?.name}</p>
                    {clickedHamster?.imgName.startsWith('hamster') 
                    ? <img src={`/img/${clickedHamster?.imgName}`} alt={clickedHamster?.name} />
                    : <img src={clickedHamster?.imgName} alt={clickedHamster?.name} />
                    }
                </figure>
            </section>
                <div>
                    <p>age: {clickedHamster?.age}</p>
                    <p>favFood: {clickedHamster?.favFood}</p>
                    <p>games: {clickedHamster?.games}</p>
                    <p>defeats: {clickedHamster?.defeats}</p>
                    <p>wins: {clickedHamster?.wins}</p>
                    <p>loves: {clickedHamster?.loves}</p>
                </div>
                <span className="bin-container"
                    onClick={() => handleDelete(clickedHamster?.id,  clickedHamster!, newHamsterArray!, setNewHamsterArray)}
                >
                    <p className="delete">delete hamster?</p> <RiDeleteBin5Fill className="bin-icon" /> 
                </span>
        </article>
    </section>
    )
}

export default HamsterCard