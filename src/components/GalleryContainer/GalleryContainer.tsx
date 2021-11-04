import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { hamstersState } from '../../State/atoms'
import { HamsterObject } from '../../TS-models/models'
import { searchFunction } from '../Search/searchFunction'
import Search from '../Search/Search'
import CardGrid from './CardGrid'


// 2. Formuläret ska använda validering. Man ska lägga till och ta bort hamster från galleriet. 

// 3. Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.

const GalleryContainer = () => {
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
            <CardGrid filterHamsters={filterHamsters} />
        </>
    )
}

export default GalleryContainer
