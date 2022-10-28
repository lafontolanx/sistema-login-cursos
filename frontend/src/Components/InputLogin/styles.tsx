import styled from 'styled-components'

export const InputCustomizado = styled.input`
  color: var(--white);
  font-size: 14px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--grey-2);
  padding: .5rem 3rem .5rem 0;
  margin: 0 3rem;
  width: 100%;
  outline: none;

    input::placeholder {
      background-color: transparent;
      color: var(--white);
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      opacity: 0.7;
    }
`