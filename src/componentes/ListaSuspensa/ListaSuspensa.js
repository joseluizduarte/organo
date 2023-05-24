import "./ListaSuspensa.css"

export const ListaSuspensa = ({label, itens, obrigatorio, valor, aoAlterar}) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={(evento) => aoAlterar(evento.target.value)} >
                {itens.map((item)=>{
                    return <option key={item}>{item}</option>
                })}
                <option value=""></option>
            </select>
        </div>
        
        
    );
}