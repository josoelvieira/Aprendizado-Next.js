import If from "../../components/If"

export default function Condcional2() {
    const numero = 5
    return (
        <div>
            <If teste={numero % 2 === 0 }>
                <h1>É par {numero}</h1>
            </If>
            <If teste={numero % 2 === 1 }>
                <h1>É impar {numero}</h1>
            </If>
        </div>
    )
}