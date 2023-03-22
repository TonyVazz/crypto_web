
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImageCrypto from './img/crypto.png';

function App() {

  const Contenedor=styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  text-align: center;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    //espacio entre elementos
    column-gap: 2;
  }
`;

  const Imagen = styled.img`
  max-width: 800px;
  width: 100%;
  margin: 100px auto 0 auto;
  display: block;
  @media (max-width: 992px){
    margin: 0;
    margin-top: 50px;

  }
  
`;

  const Heading = styled.h1`
    font-family: 'DotGothic16', sans-serif;
    color: #FFF;
    text-align:center;
    font-weight: 700;
    margin-top: 70px;
    margin-bottom: 30px;
    font-size: 60px;

    &::after{
      content:'';
      width:100px;
      height:6px;
      background-color: #66a2fe;
      display:block;
      margin: 10px auto 0 auto;
      }

  `;

  return(
    <Contenedor>
        
      <Imagen
      src={ImageCrypto}
      alt="Es una imagen de crypto"
      />
     <div>
      <Heading>Cryptony</Heading>
      <Formulario/>
      </div>
    </Contenedor>
    
    
  ) 
}

export default App;
