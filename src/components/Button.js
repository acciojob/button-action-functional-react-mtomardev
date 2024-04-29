import React, {useState} from "react";

const Button = () =>{
    let [paravalue , setParavalue] = useState("")
    
    function handlepara(){
        setParavalue("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.")
    }
    return(
        <div>
            <button id="click" onClick={handlepara}></button>
            <p id="para">{paravalue}</p>
        </div>
    )
}

export default Button