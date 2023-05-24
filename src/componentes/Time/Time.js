import Colaborador from "../Colaborador";
import "./Time.css";

export const Time = ({nome, corPrimaria, corSecundaria, colaboradores}) => {
    
    const cssSection = {backgroundColor: corSecundaria}
    const cssH3 = {borderColor: corPrimaria}
    const timeVazio = colaboradores.length===0
    
    return timeVazio ? null : (
        <section className="time" style={cssSection}>
            <h3 style={cssH3}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corDeFundo={corPrimaria}
                />)}
            </div>
            
        </section>
    );
}