import { SearchProps } from '../../TS-models/models';

import {BsSearch} from 'react-icons/bs';
import './Search.css'


const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <>
      <form className="search-form">
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
