function acao1() {
    alert("Acao 1");
}
export default function botao(props) {
    function acao2() {
        console.log("Acao 2");
    }
    return (
        <div>
            <button onClick={acao1}>Click</button>
            <button onClick={acao2}>Click2</button>
            <button onClick={function (){
                console.log("Acao 3");
            }}>Click3</button>

        </div>
    )
}