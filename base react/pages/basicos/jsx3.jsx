export default function jsx3(){
    const texto = "Titulo";
    const trechoh3 = 9
    return (
        <div>
            <h1>Integração javascript</h1>
            <h2>{texto}</h2>
            <h5>{entre(9.5, 1, 20)}</h5>
            <h3>{trechoh3}</h3>
        </div>
    )
}
function entre(valor, min, max){
    if(valor >= min && valor <= max){
        return "Sim";
    } else{
        return "Não";
    }
}