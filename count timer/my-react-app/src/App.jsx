import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isStart , setIsStart] = useState(false)
  const [hours , setHours] = useState(0)
  const [minutes , setMinutes] = useState(0)
  const [seconds , setSeconds] = useState(0)
  const [timerId , setTimerId] = useState(0)
  const [isPaused , setIsPaused] = useState(false)

  const handlestart = ()=>{
    if(hours <0 || minutes < 0 || seconds <0){
      alert("Invalid inputs")
      return;
    }
    else{
      setIsStart(true)
    }
  }
  const handleResume = () =>{
    setIsPaused(false)
    runTimer(seconds , minutes , hours , timerId)
  }

  const handlePause = () =>{
    setIsPaused(true)
    clearInterval(timerId)

  }

  const handleReset = () =>{
    setIsStart(false)
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    clearInterval(timerId)
    setIsPaused(false)
  }

  const handleinput = (e) =>{
    let id = e.target.id;
    let value = parseInt(e.target.value);
    if(id == "hours"){
      setHours(value)
    }
    else if(id == "minutes"){
      setMinutes(value)
    }
    else{
      setSeconds(value)
    }
  }

  const runTimer = (sec , min , hr , tid)=>{
    if(sec > 0){
      setSeconds((s)=>s-1);
    }
    else if(sec === 0 && min > 0){
      setMinutes((m)=>m-1);
      setSeconds(59);
    }else{
      setHours((h)=>h-1);
      setMinutes(59);
      setSeconds(59);
    }

    if (minutes == 0 && seconds == 0 && hours == 0){
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      clearInterval(tid)
    alert("Timer is finished!!")
    }
  }

  useEffect(()=>{
    let tid;
    if(isStart){
      tid = setInterval(()=>{
        runTimer(seconds , minutes , hours , tid)
      } ,1000)
      setTimerId(tid);
    }

    return ()=>{
      clearInterval(tid)
    }
  },[isStart , hours , minutes , seconds])

  // const handleinputminutes = (e) =>{
  //   let value = e.target.value;
  //   setMinutes(value)
  // }

  // const handleinputseconds = (e) =>{
  //   let value = e.target.value;
  //   setSeconds(value)
  // }

  return (
    <>
      <div>
        <h1>Counter timer : </h1>
        {
          !isStart && <div className="input-container"> 
          <div className="input-box">
            <input type="text" id='hours' placeholder='HH' onChange={handleinput}/>
            <input type="text" id="minutes" placeholder='MM' onChange={handleinput}/>
            <input type="text" id='seconds' placeholder='SS' onChange={handleinput}/>
          </div>
          <button onClick={handlestart}>Start</button>
        </div>
        }
        
        {isStart && <div className="show-container">
          <div className="timer-box">
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
            <span>:</span>
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>

          <div className="action-btn">
            {!isPaused && <button onClick={handlePause} className="timer-button">Pause</button>}
            {
              isPaused && 
              <button onClick={handleResume} className='timer-button'>Resume</button>
            }
            <button className="timer-button" onClick={handleReset}>Reset</button>
          </div>
          </div>
        }
        
        </div>
    </>
  )
}

export default App
