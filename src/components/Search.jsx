import React from 'react'
import search from '../assets/search.svg'

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className={"search"}>
            <div>
                <img src={search} alt="searcn_img" />
                <input type="text" value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
        </div>
    )
}
export default Search
