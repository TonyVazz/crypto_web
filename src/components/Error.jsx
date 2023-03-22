import styled from '@emotion/styled'

const Texto = styled.div`
background-color: #bf2a23;
color: white;
padding:15px;
font-size: 18px;
text-transform:uppercase;
margin-bottom:30px;
text-align:center;
font-family: 'Reggae One', cursive;
`;

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error