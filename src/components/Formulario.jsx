import React from 'react'
import styled from "@emotion/styled";
import useSelectorMonedas from '../hooks/useSelectorMonedas';
import {monedas} from '../data/monedas';

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

  const [state, SelectorMonedas] = useSelectorMonedas('Elige tu moneda', monedas);
  
  return (
    <div>
      {/* droplist */}
      {/* <Contenedor>
      <SelectSubmit name="cryptosOne" id="pet-select">
      <option value="">-</option>
      <option value="ETH">ETH</option>
      <option value="BTC">BTC</option>
      <option value="Doge Coin">Doge Coin</option>
      <option value="BNB">BNB</option>
    </SelectSubmit>
    <SelectSubmit name="cryptosOne" id="pet-select">
      <option value="">-</option>
      <option value="ETH">ETH</option>
      <option value="BTC">BTC</option>
      <option value="Doge Coin">Doge Coin</option>
      <option value="BNB">BNB</option>
    </SelectSubmit>

      </Contenedor> */}
    <form >
        <SelectorMonedas/>
        {state}
        <InputSubmit type="submit" value="Cotizar" />   
    </form>
    </div>
  )
}

export default Formulario

