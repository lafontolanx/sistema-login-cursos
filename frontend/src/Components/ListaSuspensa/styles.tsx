import styled from "styled-components";

export const Container = styled.div`

`

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 20px; 
    font-weight: 600;
    color: var(--white);
`

export const SelectBox = styled.div`
    padding: 20px;
    background-color: transparent;
    border-bottom: 2px solid var(--grey-2);
    box-shadow: 10px 10px 30px rgba(0,0,0,0.06);
`

export const Select = styled.select`
    width: 100%;
    border: none;
    font-size: 19px;
    box-sizing: border-box;
    background-color: transparent;
    outline: none;

    color: var(--grey-2);
`