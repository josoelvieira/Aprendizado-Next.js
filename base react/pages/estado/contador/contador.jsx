import { useState } from "react";
import Display from "../../../components/Display";

export default function (){
   
        const botao ={
            width:"100px",
        }
        const [numeros, setNumeros] = useState(0);

        function somaUm(){
            setNumeros(numeros + 1)
            
        }
        function diminueUm(){
            setNumeros(numeros - 1)
            
        }
    return (
        <div>
            <div>
            <h1>Contador</h1>
            <Display numeros={numeros}/>
            <div><button style={botao} onClick={somaUm}>+</button>
            <button style={botao} onClick={diminueUm}>-</button></div>
            </div>
        </div>
    )
}