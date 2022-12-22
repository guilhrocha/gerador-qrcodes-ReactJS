import Qrcode from 'react-qr-code'
import './App.css';
import {useState} from 'react'


function App() {
  const [link, setLink] = useState('') 
  function mudarqrcode(e){
    setLink(e.target.value)
  }

  return (
    <div>
    <h1 className='paragrafo'>Gerador de qrcode automático com ReactJS</h1>
    <div className='container'>
        <Qrcode value={link}/>
        <input className='inserir' placeholder="Digite ou insira seu link aqui..." value={link} onChange={ (e) => mudarqrcode(e)}/>
    </div>
    </div>
  );
}

export default App;
