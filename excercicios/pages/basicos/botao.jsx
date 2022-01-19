function acao1() {
    alert("Acao 1");
}
export default function botao(props) {
    function acao2() {
        console.log("Acao 2");
    }
    function acao5 (e) {
        console.log(e);

    }
    return (
        <div>
            <input type="text"  onChange={e => console.log(e.target.value)}/>
            <button onClick={acao1}>Click</button>
            <button onClick={acao2}>Click2</button>
            <button onClick={function (){
                console.log("Acao 3");
            }}>Click3</button>
            <button onClick={() => { console.log("Acao 4")}}>Click4</button>
            <button onClick={acao5}>Click5</button> 
            <button onClick={e => acao5 (e.altKey)}>Click6</button>  

        </div>
    )
}