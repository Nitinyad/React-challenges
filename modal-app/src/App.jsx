import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal'

function App() {
  
  const [isShow , setIsShow] = useState(false)
  const [isOfferAccepted , setIsOfferAccepted] = useState(false)
  
  const handleOpenModal = ()=>{
    setIsShow(true)
  }
  const handleAccept = () =>{
    setIsOfferAccepted(true)
    setIsShow(false)
  }
  const handleClose = () =>{
    setIsShow(false)
  }

  return (
    <>
      <div className="show-offer">
        {!isOfferAccepted && !isShow && <button 
        onClick={handleOpenModal}
        className="offer-btn">
          Show offer
        </button>}
        {isOfferAccepted &&
        <div>offer is accepted 🎉</div>}
      </div>

      {
        isShow && 
        <Modal accept = {handleAccept} closemodal = {handleClose}/>
      }
    </>
  )
}

export default App
