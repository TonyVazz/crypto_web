import {useState, useEffect} from 'react'
import styled from "@emotion/styled";
import useSelectorMonedas from '../hooks/useSelectorMonedas';
import {monedas} from '../data/monedas';
import Error from './Error';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 900;
    font-size:20px;
    border-radius:12px;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: purple;
        cursor: pointer;
    }
`;

// const SelectSubmit = styled.select`
//     background-color: #9497FF;
//     width: 37%;
//     padding: 10px;
//     justify-content:center;
//     color: white;
//     font-weight: 900;
//     font-size:20px;
//     border-radius:12px;
//     margin: 50px;
// `;
// const Contenedor=styled.div`
// display:flex;
// flex-direction:row;
// `;

const Formulario = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectorMonedas] = useSelectorMonedas('Elige tu moneda', monedas);
  const [cripto, SelectorCripto] = useSelectorMonedas('Elige tu crypto', cryptos);
  
  //consultar una api es con esto
  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      const arregloCryptos = resultado.Data.map(crypto => {

        const objeto = {
          id: crypto.CoinInfo.Name, 
          nombre: crypto.CoinInfo.FullName,
        }

        // console.log(objeto);
        return objeto;
      },);
      setCryptos(arregloCryptos);
    }
    consultarApi();
  }, [])
  
  const manejadorSubmit = e => {
    e.preventDefault();

    if([moneda,cripto].includes('')){
      console.log('ERROOOOOOOOOOOOOOOR')
      setError(true);
      return;
    }
    setError(false);

    console.log('se envio el formulario');
    console.log(moneda);
    console.log(cripto)
  }
  return (  
    <div>
     {error && <Texto>Todos los campos son obligatorios</Texto>}
    <form 
      onSubmit={manejadorSubmit}
    >
        <SelectorMonedas/>
        {moneda}
        <SelectorCripto/>
        {cripto}
        <InputSubmit type="submit" value="Cotizar" />   
    </form>
    </div>
  )
}

export default Formulario

