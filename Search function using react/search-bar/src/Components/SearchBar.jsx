import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({setResults}) => {

    const [input  , setInput] = useState("");

    const fetchData = (value)=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json())
        .then(json => {
            const results = json.filter((user)=>{
                return   user && user.name && user.name.toLowerCase().includes(value)
            })
            setResults(results);
        })
    }

    const handlechange = (value)=>{
        setInput(value);
        fetchData(value);
    }
  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input placeholder='type to search...' value={input} onChange={(e)=>handlechange(e.target.value)}/>
    </div>
  )
}

export default SearchBar