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
                {hamster1.imgName.startsWith('hamster') 
                ? <img src={`/img/${hamster1.imgName}`} alt={hamster1.name} />
                : <img src={hamster1.imgName} alt={hamster1.name} />
                }
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
            {hamster2.imgName.startsWith('hamster') 
            ? <img src={`/img/${hamster2.imgName}`} alt={hamster2.name} />
            : <img src={hamster2.imgName} alt={hamster2.name} />
            }
                <p>name: {hamster2.name}</p>
            </figure>
        </article>)
        : null}
       
        </>
    )
}

export default Rivals