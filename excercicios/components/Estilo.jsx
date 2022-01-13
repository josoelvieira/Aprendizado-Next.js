export default function Estilo(props) {
    return(
            <>
            <h1 style={{background:props.numero <= 0 ? "red" : "green",color:"#fff",
            textAlign: props.direita ? "right" : "left"}}>
            Texto
            </h1>
            </>
    )
}