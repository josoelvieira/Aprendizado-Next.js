export default function somentePar(props) {
    const numeroPar = props.numero % 2 === 0;
        return (
            <div>
                {numeroPar ? <h3>{props.numero} </h3> : null}
            </div>
        ) 
        }
