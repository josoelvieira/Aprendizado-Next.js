import { useState } from "react";
import Display from "../../components/Display";
import { mega } from "../../function/mega";

export default function megasena() {
    const [numeros, setNumeros] = useState(mega())

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
                flexDirection: "row",

            }}>{rederizarNumeros()}</div>
            <input type="text" />
            <button onClick={() => setNumeros (mega())}>Gerar aposta</button>
        </div>
    )

}