import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [hideshow , setHideShow] = useState(false);
    const [email , setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [count , setCount ] = useState(0)

    let value = useRef(count);

    const printdata = () =>{
        console.log({email , password});
        console.log({...value})
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        value = password;
    }


    useEffect(()=>{
        value.current = count;
    },[count])

    const decrement = () =>{
        setCount(count - 1);
    }

    const increment = () =>{
        setCount(count + 1);
    }

    const handleclick = (e)=>{
        e.preventDefault();
        setHideShow(!hideshow);
    }
  return (
    <div className='page-div'>
        <form onSubmit={handlesubmit} className='form-ele'>
            <h2>Login page</h2>
            <div className='form-div'>
                <label htmlFor="email">Email</label>
                <input type='text' onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className='form-div'>
                <label htmlFor="password">Password</label>
                <input type = {hideshow ? 'password' : 'text'} onChange={e=>setPassword(e.target.value)}/>
                <button onClick={handleclick}>{hideshow ? 'show' : 'hide'}</button>
            </div>
            <button type='submit'>submit</button>
            <Link to="/signup">signup</Link>
        </form>
        <button onClick={printdata}>print</button>
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    </div>
  )
}

export default Login