import React from 'react'



const Modal = ({  closemodal , accept}) =>{

    const handleoutside = (e) =>{
        console.log(e.target.className)
        if(e.target.className === 'modal'){
            closemodal()
        }
    }
    
    return (
        <div className="modal" onClick={handleoutside}>
            <div className="model-content">
                <button 
                onClick={closemodal}
                className="close-btn">X</button>
                <div className="content">
                    click on the button below to accept the offer !!
                </div>
                <button 
                onClick={accept}
                className="accept-btn">
                    Accept offer
                </button>
            </div>
        </div>
    )
}

export default Modal;