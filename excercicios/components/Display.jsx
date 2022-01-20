export default function Display(props) {
    return (
        <div style={{ display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        with:"100px",
        height:"100px",
        borderRadius:"100%",
        background:"#222",
        padding:"40px",
        margin:"10px",
        color:"#fff",
        }}>
            <h1>{props.numeros}</h1>
        </div>
    )
}