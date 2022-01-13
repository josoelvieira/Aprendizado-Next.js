export default function Titulo(props) {
    
    return props.pequeno ? ( //operador ternario
            <>
                <p>{props.titulo}</p>
                <p>{props.subtitulo}</p>
            </>
            ) : (
            <>
                <h1>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
            </>
        )
}