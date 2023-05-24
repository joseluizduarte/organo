import "./Colaborador.css"

export const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt="Imagem do colaborador" />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}