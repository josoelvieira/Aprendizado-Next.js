import { useEffect, useState } from "react";
import Display from "../../components/Display";
import { mega } from "../../function/mega";

export default function megasena() {
    const [qtde, setQtde] = useState(6);
    const [numeros, setNumeros] = useState([])
    
    useEffect(() => {
        setNumeros(mega())
    }, [])

    function rederizarNumeros() {
        return numeros.map(
        numeros => <Display key={numeros} numeros={numeros} />
        )
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1>Megasena</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                flexDirection: "row",
            }}>
                {rederizarNumeros()}
            </div>
            <span>Numero de apostas</span>
            <input type="number" min={6} max={20} value={qtde} onChange={e => setQtde(e.target.value)}/>
            <button onClick={() => setNumeros (mega(qtde))}>Gerar aposta</button>
        </div>
    )

}