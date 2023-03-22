import styled from '@emotion/styled'

const Texto = styled.div`
background-color: red;
color: white;
padding:15px;
font-size: 20px;
text-transform:uppercase;
margin-bottom:30px;
`;

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error