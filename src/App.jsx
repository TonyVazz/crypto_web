
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImageCrypto from './img/crypto.png';

function App() {

  const Contenedor=styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    //espacio entre elementos
    column-gap: 2;
  }
`;

  const Imagen = styled.img`
  max-width: 400px;
  width: 30%;
  margin: 100px auto 0 auto;
  display: block;
  
`;

  const Heading = styled.h1`
    font-family: 'Codystar', cursive;
    color: #FFF;
    text-align:center;
    font-weight: 700;
    margin-top: 150px;
    margin-bottom: 70px;
    font-size: 40px;

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
