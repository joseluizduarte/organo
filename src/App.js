import { useState } from "react";

import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {

  const times = [
    {nome: 'Programação', corPrimeria: '#57C278', corSecundaria: '#D9F7E9'},
    {nome: 'Front-End', corPrimeria: '#82CFFA', corSecundaria: '#E8F8FF'},
    {nome: 'Data Science', corPrimeria: '#A6D157', corSecundaria: '#F0F8E2'},
    {nome: 'Devops', corPrimeria: '#E06B69', corSecundaria: '#FDE7E8'},
    {nome: 'UX e Desig', corPrimeria: '#DB6EBF', corSecundaria: '#FAE9F5'},
    {nome: 'Mobile', corPrimeria: '#FFBA05', corSecundaria: '#FFF5D9'},
    {nome: 'Inovação e Gestão', corPrimeria: '#FF8A29', corSecundaria: '#FFEEDF'}
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const salvarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario cadastrarColaborador={colaborador => salvarColaborador(colaborador)} times={times.map((time)=>time.nome)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimeria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time===time.nome)}
      />)}
    </div>
  );
}

export default App;
