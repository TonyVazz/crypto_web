import React from 'react'
import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #9497FF;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  border-radius: 20px;
  margin-top: 10px;
  padding: 30px;
  text-align: center;
`;

const Imagen = styled.img`
 width: 50%;
 
`;

const Data = ({datos, imagen}) => {
   const {precioActual,precioBajo,precioInicio} = datos;
  return (
    <div>
    <Texto>
        <p>Precio Actual: {precioActual}</p>
        <p></p>
        <p>Precio Mas bajo: {precioBajo}</p>
        <p></p>
        <p>Precio Inicial: {precioInicio}</p>   
        <Imagen src={imagen} alt="Imagen de la criptomoneda" />
    </Texto>
    </div>
  )
}

export default Data
