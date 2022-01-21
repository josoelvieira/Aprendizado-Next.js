export default function lista3(){
    return(
        <div>
            <div>
            {geraLista(20)}
        </div>
        <div>
            {geraLista(5)}
        </div>
        </div>
    )
}
function geraLista(final = 10){
    const lista = [];
    for(let i = 1; i <= final; i++) {
            lista.push(<span>{i},</span>)
    }
    return lista;
}