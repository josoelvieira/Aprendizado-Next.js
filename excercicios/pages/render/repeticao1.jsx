export default function repeticao(){
    const lista = [
        'Josoel',
        'Matheus',
        'Flavia',
        'Maria',
        'Joelma'
        ]
    function renderizarLista(){
        const itens =[]

        for(let i = 0; i < lista.length; i++) {
        itens.push(<li key={i}>{lista[i]}</li>)
        }
    }}