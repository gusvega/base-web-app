import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    console.log('SEARCHFIELD')
    return (
        <div className='pa2'>
            <input 
                aria-label="Search-Users"
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Users'
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;