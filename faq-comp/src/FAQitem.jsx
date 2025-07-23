import { useEffect, useState } from "react"


const FAQitem = ({faq , index})=>{
    const [isShow , setIsShow] = useState(false)
    const handleClick = () =>{
        setIsShow((isShow) => !isShow)
    }

    useEffect(()=>{
        if(index == 0){
            setIsShow(true)
        }
    } , [])
    return (
        <div className="container">
            <div className="que" onClick={handleClick}> 
                <button >{`>`}</button>
                <div>{faq.question}</div>
            </div>
            {isShow && <div className="ans">{faq.answer}</div>}
        </div>
    )
}

export default FAQitem;