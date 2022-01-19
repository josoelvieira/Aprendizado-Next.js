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
    return (
        <div style={painel}>
            <div>
            <h1>Contador</h1>
            <div>Visor: ???</div>
            <div><button style={botao} onClick={}>+</button>
            <button style={botao} onClick={}>-</button></div>
            </div>
        </div>
    )
}