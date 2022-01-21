import { Component } from "react";

export default class Contador extends Component {
    state ={ 
        numero: this.props.valorInicial ?? 0
    }
    inc() {
        this.setState({ numero: this.state.numero + (this.props.passo ?? 1) })
    }
    dec() {
        this.setState({ numero: this.state.numero - (this.props.passo ?? 1) })
    }

    render() {
        return (
            <div style={{display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            margin:"10px"}}>
                <h1>Contador</h1>
                <h2 style={{background:"#222",
                width:"100px",
                textAlign:"center",
            }}>{this.state.numero}</h2>
                <div>
                    <button onClick={() => this.inc()}>+</button>
                    <button onClick={() => this.dec()}>-</button>
                </div>
            </div>
        )
    }
}