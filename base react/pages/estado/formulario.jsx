import { useState } from "react"

export default function formulario(){
    const [valor, setValor] = useState("Inicial")

    function alterarInput() {
        setValor(valor + "!")
    }
    return (
        <div style={{display:"flex",
        flexDirection:"column",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center"
        
        }}>
            <h1>{valor}</h1>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}