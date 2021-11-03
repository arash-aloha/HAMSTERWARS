import { useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { hamstersState } from '../../State/atoms'
import { HamsterObject } from '../../TS-models/models'
import Search from '../Search/Search'

//import { RiDeleteBin5Line } from 'react-icons/ri' 
//import { HiPencil } from 'react-icons/hi' 

const GalleryCard = () => {
    //recoil state
    const hamstersArray = useRecoilValue<null | HamsterObject[]>(hamstersState);

    //search hamster
    const [searchString, setSearchString] = useState<string>('');
    const filterHamsters:HamsterObject[] = searchFunction(hamstersArray!, searchString);

    return (
        <>
        <Search 
            search={searchString}
            setSearch={setSearchString}
        />

        <section className="gallery grid-container">
            {filterHamsters?.map(object => (
                <figure key={object.id} 
                    className="hamster-card"
                    onClick={() => {console.log('click', object.id)}}
                >
                    <div className="hamster-img-container" key={object.id}>
                            
                        <img src={`/img/${object.imgName}`} 
                                    alt={object.name} 
                        />
                        <p>{object.name.toUpperCase()}</p>
                        
                    </div> 
                </figure>
            ))}
        </section>
        </>
    )
}
const searchFunction = (
    hamstersArray: HamsterObject[], searchString: string): HamsterObject[] => {
    return hamstersArray.filter((hamster) => {
    if (searchString === "") {
        return true;
    } else {
        const name = hamster.name.toLowerCase();
        const search = searchString.toLowerCase();
        return name.includes(search);
    }
});
};
export default GalleryCard
