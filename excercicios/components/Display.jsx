export default function Display(props) {
    return (
        <div style={{ display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        with:"50px",
        height:"50px",
        borderRadius:"25px",
        background:"#222"}}>
            <h1>{props.numeros}</h1>
        </div>
    )
}