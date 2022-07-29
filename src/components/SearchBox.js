import React from 'react'
import 'tachyons'

export const SearchBox = ({searchfield , searchChange}) => {
    return (
        <div className='pa2 ma3 tc'>
            <input 
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' name='searchBox' 
            placeholder='Search Robot'
            onChange={searchChange}/>
        </div>
    );
}

