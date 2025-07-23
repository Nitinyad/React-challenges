import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'

function App() {
  const [results , setResults ] = useState([]);


  return (
    <>
      <div className='App'>
        <div className="search-bar-container">
          <SearchBar setResults={setResults}/>
          <div>{
            results.map((user)=>{
              return (<ul className='search-result'>
                <li>{user.name}</li>
              </ul>)
            })
        }</div>
        </div>
      </div>
    </>
  )
}

export default App
