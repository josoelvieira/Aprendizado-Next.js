export default function Filho(props) {
    
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={ev => props.funcao(ev)}>Chamar Pai</button>

            <button onClick={() => props.funcao("Passei no enem!", "Passei!!")}>Chamar Pai2</button>
        </div>
    )
}