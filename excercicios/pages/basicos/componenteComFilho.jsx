import Lista from "../../components/Lista";
import Item from "../../components/Item";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item 1"/>
                <Item conteudo="Item 3"/>
                <Item conteudo="Item 6"/>
                <Item conteudo="Item 12"/>
                <Item conteudo="Item 120"/>
            </Lista>
        </div>
    )
}
