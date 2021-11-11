import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { addBtnAtom, hamstersState, toggleState } from '../../State/atoms'
import { HamsterObject } from '../../TS-models/models'
import { searchFunction } from '../Search/searchFunction'

import Search from '../Search/Search'
import CardGrid from './CardGrid'
import HamsterCard from '../HamsterCard/HamsterCard'
import AddPage from '../Add/AddPage'

// 2. Formuläret ska använda validering. Man ska lägga till och ta bort hamster från galleriet. 

const GalleryContainer = () => {
    //recoil state
    const hamstersArray = useRecoilValue<null | HamsterObject[]>(hamstersState);
    const toggle = useRecoilValue(toggleState)
    const toggleAdd = useRecoilValue(addBtnAtom)
    //search hamster
    const [searchString, setSearchString] = useState<string>('');
    const filterHamsters:HamsterObject[] = searchFunction(hamstersArray!, searchString);

    const activeOverlay = toggle;
    const activeAddOverlay = toggleAdd;

    return (
        <>
            <Search search={searchString} setSearch={setSearchString} />
            
            { activeAddOverlay ? <AddPage /> : null }
            { activeOverlay ? <HamsterCard /> : null }

            <CardGrid filterHamsters={filterHamsters} />
        </>
    )
}

export default GalleryContainer
