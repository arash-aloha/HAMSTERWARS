import { HamsterObject } from "../../TS-models/models"

interface RivalsProps {
    hamster1: HamsterObject;
    hamster2: HamsterObject;
    handlePUT: (hamster1:HamsterObject, hamster2:HamsterObject)=>void;
}

const Rivals = ({ hamster1, hamster2, handlePUT }: RivalsProps) => {

    return (
        <>
        {hamster1 
        ?   (<article className="contestants" key={hamster1.id}
                    onClick={() => {handlePUT(hamster1, hamster2)}} 
            >
                <figure className="contestants-img-container">
                    <img src={`/img/${hamster1.imgName}`} 
                        alt="contestants" 
                    />
                        <p>name: {hamster1.name}</p>
                </figure>
            </article>)
            : null
        }
        {hamster2 
        ?
        (<article className="contestants" key={hamster2.id}
        onClick={() => {handlePUT(hamster2, hamster1)}} 
        >
            <figure className="contestants-img-container">
                <img src={`/img/${hamster2.imgName}`} 
                    alt="contestants" 
                />
                <p>name: {hamster2.name}</p>
            </figure>
        </article>)
        : null}
       
       {/* <button onClick={() => window.location.reload()}> R E F R E S H </button> */}
        </>
    )
}

export default Rivals