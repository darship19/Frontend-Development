import React from 'react'

function SearchBar({SearchQuery,setSearchQuery}) {
  return (
    <div className='p-4'>
        <input 
        type="text"
        placeholder='Search users...'
        className='border p-3 rounded w-full'
        value={SearchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchBar