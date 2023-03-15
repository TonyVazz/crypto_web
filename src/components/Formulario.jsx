import React from 'react'
import styled from "@emotion/styled";

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

//hacer droplist de cryptos

const Formulario = () => {
  return (
    <form >
        <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario