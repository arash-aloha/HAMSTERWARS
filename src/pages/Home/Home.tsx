import { useRecoilValue } from "recoil";
import { hamstersState, matchState } from "../../State/atoms";

const Home = () => {
    
    const matchResults = useRecoilValue(matchState)
    
    return (
        <main className="container">
            /*
            Startsida
            1. Här ska du förklara för användaren hur man använder appen. Länka till vyerna Tävla och Galleri. (Med React Router-länkar,  L i n k .)
        
            2. Visa den hamster som vunnit mest. Vi räknar (antal vinster) - (antal förluster). Om det är oavgjort mellan flera hamstrar, ska appen slumpa en av dem. (Backend endpoint /hamsters/cutest.)
        
            3. Om det av någon anledning inte går att nå backend-servern så ska du visa ett användarvänligt felmeddelande här. Användaren ska också få möjligheten att försöka igen.
            */
        </main>
    )
}

export default Home;