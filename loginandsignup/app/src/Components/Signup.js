import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    const handlesubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div className='page-div'>
        <form onSubmit={handlesubmit} className='form-ele'>
            <h2>Signup page</h2>
            <div className='form-div'>
                <label htmlFor="name">Name : </label>
                <input type="text" onClick={e=>e.target.value} />
            </div >
            <div className='form-div'>
                <label htmlFor="email">Email: </label>
                <input type="text" onClick={e=>e.target.value}/>
            </div>
            <div className='form-div'>
                <label htmlFor="password">Password : </label>
                <input type="password"  onClick={e=>e.target.value}/>
            </div>
            <button type='submit'>submit</button>
            <Link to="/">login</Link>
        </form>
    </div>
  )
}

export default Signup