export default function repeticao(){
    const lista = [
        'Josoel',
        'Matheus',
        'Flavia',
        'Maria',
        'Joelma'
        ]
    function renderizarLista(){
        return lista.map((nome, i) => <li key={i}>{nome}</li>)
        }
        return(
            <ul>
                {renderizarLista()}
            </ul>
        )
    }
    


    /*function renderizarLista(){
        const itens =[]

        for(let i = 0; i < lista.length; i++) {
        itens.push(<li key={i}>{lista[i]}</li>)
        }
        return itens
    }}*/