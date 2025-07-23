import logo from './logo.svg';
import './App.css';
import {Route , Router, Routes} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path='/'  Component={Login}/>
      <Route path='/signup' Component={Signup}/>

      </Routes>
    
    </div>
  );
}

export default App;
