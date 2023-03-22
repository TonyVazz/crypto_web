import {useState, useEffect} from 'react'
import styled from "@emotion/styled";
import useSelectorMonedas from '../hooks/useSelectorMonedas';
import {monedas} from '../data/monedas';
import Error from './Error';
import Data from './Data';

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


const Formulario = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectorMonedas] = useSelectorMonedas('Elige tu moneda', monedas);
  const [cripto, SelectorCripto] = useSelectorMonedas('Elige tu crypto', cryptos);
  const [data, setData] = useState({});
  const [consulta, setConsulta] = useState(false);
  const [imagenCrypto, setImagenCrypto] = useState('');
  
  

  
  
  //consultar una api es con esto
  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      const arregloCryptos = resultado.Data.map(crypto => {

        const objeto = {
          id: crypto.CoinInfo.Name, 
          nombre: crypto.CoinInfo.FullName,
        }

        console.log(objeto);
        return objeto;
      }
      );
      setCryptos(arregloCryptos);
    };
    consultarApi();
  }, [])
  
  const manejadorSubmit = async (e) => {
    e.preventDefault();

    if([moneda,cripto].includes('')){
      console.log('ERROOOOOOOOOOOOOOOR')
      setError(true);
      return;
    }
    setError(false);
    // console.log('se envio el formulario');
    // console.log(moneda);
    // console.log(cripto)

    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${moneda}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const objetoCrypto = resultado.Data.find(
      (crypto) => crypto.CoinInfo.Name === cripto
    );
    const imagenUrl = `https://cryptocompare.com${objetoCrypto.CoinInfo.ImageUrl}`;
    setImagenCrypto(imagenUrl);

    const obejetoData = objetoCrypto.DISPLAY[moneda];
    setData({
      precioActual: obejetoData.PRICE,
      precioBajo: obejetoData.LOWDAY,
      precioInicio: obejetoData.OPENDAY
    })
    
    setConsulta(true);
  };

  return (  
    <div>
     {error && <Error>Todos los campos son obligatorios</Error>}
    <form 
      onSubmit={manejadorSubmit}
    >
        <SelectorMonedas/>
        {/* {moneda} */}
        <SelectorCripto/>
        {/* {cripto} */}
        <InputSubmit type="submit" value="Cotizar" />   
    </form>
    {consulta ? (<Data datos={data} imagen={imagenCrypto}/>) : null}
    </div>
  )
}

export default Formulario

