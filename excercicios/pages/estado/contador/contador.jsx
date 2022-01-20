import { useState } from "react";

export default function (){
    const painel = {
        background:"#222",
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        height:"100vh",
        width:"100vw",
        }
        const botao ={
            width:"100px",
        }
        const [x, setX] = useState(0);

        function somaUm(){
            setX(x + 1)
            console.log(x)
        }
        function diminueUm(){
            setX(x - 1)
            console.log(x)
        }
    return (
        <div>
            <div>
            <h1>Contador</h1>
            <div>Visor: {x}</div>
            <div><button style={botao} onClick={somaUm}>+</button>
            <button style={botao} onClick={diminueUm}>-</button></div>
            </div>
        </div>
    )
}