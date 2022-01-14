import Linha1 from "../../components/Linha1";
import Linha2 from "../../components/Linha2";

import style from "./tabuleiro.module.css";

export default function tabauleiro(){
    return(
        <>
        <div id={style.container}>
        <div id={style.tabuleiro}>
        <Linha1 />
        <Linha2 />
        <Linha1 />
        <Linha2 />
        <Linha1 />
        <Linha2 />
        <Linha1 />
        <Linha2 />
        </div>
        </div>
        </>
    )
}