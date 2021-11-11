import { SearchProps } from '../../TS-models/models';
import { useRecoilState } from 'recoil';
import { addBtnAtom } from '../../State/atoms';

import { BsSearch } from 'react-icons/bs';
import { IoIosAddCircle } from 'react-icons/io';
import './Search.css'

const Search = ({ search, setSearch }: SearchProps) => {
  
  const [toggle, setToggle] = useRecoilState<boolean>(addBtnAtom)
  
  return (
    <>
      <form className="search-form">
        <span className="add-btn-container"
              onClick={() => setToggle(!toggle)}
        ><IoIosAddCircle />
        </span>


        <span className="input-container">
            <input type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <span className="search-icon"><BsSearch /></span>
        </span>
      </form>
    </>
  );
};

export default Search;
