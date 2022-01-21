import Filho from "./Filho"

export default function Pai(props) {
    return (
        <div>
           
            <Filho nome="Josoel" familia="Vieira"></Filho>

            <Filho nome="William" familia="Oliveira"></Filho>

            <Filho {...props} nome="Jorge"></Filho>
        </div>
    )
}