export default function Lista(props) {
    return (
        <div>
            <h1>Lista</h1>
            <ul style={{listStyle:"none", padding:"0px"}}>
            {props.children}
        </ul>
        </div>
    )
}