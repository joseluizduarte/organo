import "./CampoTexto.css"

export const CampoTexto = ({label, placeholder, obrigatorio, valor, aoAlterar}) => {

    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input required={obrigatorio} type="text" placeholder={placeholder} value={valor} onChange={aoDigitar} />
        </div>
    );
}