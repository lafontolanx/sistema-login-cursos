import styled from "styled-components";

export const Container = styled.div`
    margin: 20px 0;
`

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 20px; 
    font-weight: 600;
    color: var(--white);
`

export const Input = styled.input`
    background-color: transparent;
    color: var(--grey-2);
    font-size: 20px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.06);
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--grey-2);
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
    outline: none;

    &::placeholder {
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }
`