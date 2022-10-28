import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const Circle = styled.img`
    position: absolute;
    left: 0;
    height: 100vh;
`

export const Triangle = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 50vh;
`

export const Stripes = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    height: 40vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 1rem;
    gap: 1rem;
`

export const Title = styled.h1`
    font-size: 2.5rem;
    color: var(--white);
    align-self: flex-start;
    margin-bottom: 2rem;
`

