import React, {useState} from "react";

const Button = () =>{
    let [paravalue , setParavalue] = useState("")
    const [showParagraph, setShowParagraph] = useState(false);

    function handlepara(){
        setShowParagraph(true)
        setParavalue("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.")
    }
    return(
        <div>
            <button id="click" onClick={handlepara}>Click</button>
            {
                showParagraph && <p id="para">{paravalue}</p> 
            }
            
        </div>
    )
}

export default Button