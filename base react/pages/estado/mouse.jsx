import { useState } from "react";

export default function mouse() {
    const [x, setX] = useState(0);

    const [y, setY] = useState(0);
    
    /*
    const arrayX = useState (0)
    let x = arrayX[0]
    const setX = arrayX[1]

    const arrayY = useState (0)
    let y = arrayY[0]
    const setY = arrayY[1]*/

    const style ={
    background:"#222",
    color:"#fff",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
}
    function quandoMover(e) {
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div style={style} onMouseMove={quandoMover}>
            <span>Eixo x:{x}</span>
            <span>Eixo y:{y}</span>
        </div>
    )
}