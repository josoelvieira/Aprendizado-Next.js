import { Component } from "react";
import Contador from "../../components/Contador";

export default class Contadorpage extends Component {
    render(){
        return (
            <div>
            <h1><Contador valorInicial={100} passo={37}/></h1>
            </div>
        )
    }
}