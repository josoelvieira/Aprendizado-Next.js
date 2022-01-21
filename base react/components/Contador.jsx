import { Component } from "react";

export default class Contador extends Component {
    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }
    inc() {
        this.setState({ numero: this.state.numero + this.state.passo })
    }
    dec() {
        this.setState({ numero: this.state.numero - this.state.passo })
    }
    renderform() {
        return (
            <div>
                <input type="number" min={1} max={1000} value={this.state.passo} onChange={e => this.setState({ passo: +e.target.value })} />
                <button onClick={() => this.inc()}>+</button>
                <button onClick={() => this.dec()}>-</button>
            </div>
        )
    }

    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "10px"
            }}>
                <h1>Contador</h1>
                <h2 style={{
                    background: "#222",
                    width: "100px",
                    textAlign: "center",
                }}>{this.state.numero}</h2>
                {this.renderform()}
            </div>
        )
    }
}