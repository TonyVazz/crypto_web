import styled from '@emotion/styled'
import {useState} from 'react'

export const useSelectorMonedas = (label, divisas) => {

    const Label = styled.label`
        color: white;
        font-size: 35px;
        padding-left: 47px;
        font-weight: 20;
        `;

    const SelectSubmit = styled.select`
    background-color: #9497FF;
    width: 63%;
    padding: 10px;
    justify-content:center;
    color: white;
    font-weight: 900;
    font-size:20px;
    border-radius:12px;
    margin: 20px;
    display:flex;
`;

    /////////// todo ////////////////
    
    const [state, setState] = useState('');

    const SelectorMonedas = () => 
        <>
        <Label>{label}</Label>
       
        <SelectSubmit 
        value={state}
        onChange={e => setState(e.target.value)
        }>
            
            <option>
                Seleccione una divisa</option>
            {divisas.map(divisa =>(
                <option key={divisa.id} value={divisa.id}>
                    {divisa.nombre}
                </option>
            ))}
        </SelectSubmit>
       
        </>

    return [state, SelectorMonedas ]

}

export default useSelectorMonedas