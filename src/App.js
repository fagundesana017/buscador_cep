import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css';

import api from './services/api'

function App() {
//trocar o valor conforme a aplicação, utiliza um estado
  const [input, setInput] = useState('')
//nome do estado = input, função que o valor tem para torcar o valor desse estado = setInput;
  const [cep, setCep] = useState({}) 
  //mostrar na tela, armazenando o retorno

 async function handleSearch(){

  if (input === '' ) {
    alert('Preencha algum CEP!')
    return
  }
  try{
   const response = await api.get(`${input}/json`)
   setCep(response.data);
   setInput("")
  }catch{
  alert('Ops, deu erro ao buscar!')
  setInput("")
  //limpar campo do input
  }

 }

return (
    <div className="container">
     <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">        
        <input type="text" placeholder="Digite seu cep..." value={input} onChange={(e) => setInput(e.target.value)}></input> 
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
         </button>
      </div>
   {Object.keys(cep).length > 0 && (
      <main className='main'>
      <h2>CEP: {cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf} </span>
      </main>
   )}   
  
    </div>
  );
}

export default App;
