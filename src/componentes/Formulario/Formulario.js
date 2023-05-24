import {useState} from "react";

import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css"

export const Formulario = ({cadastrarColaborador, times}) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault()
        cadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome} 
                    aoAlterar={valor => setNome(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterar={setTime}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}