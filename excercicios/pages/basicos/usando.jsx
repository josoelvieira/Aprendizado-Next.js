import Titulo from '../../components/Titulo'

export default function usandoTitulo(){
    return(
        <div>
        <Titulo 
        titulo="Pagina de cadastro" subtitulo="Cadastro"/>

        <Titulo 
        titulo="Pagina de cadastro" subtitulo="Cadastro"
        pequeno="{true}"/>

        <Titulo 
        titulo="Pagina de cadastro" subtitulo="Cadastro"
        pequeno/>
        </div>
    )
}