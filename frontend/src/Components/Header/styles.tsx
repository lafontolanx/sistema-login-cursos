import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--grey-1);
    top: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: .5rem;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
`

export const Logo = styled.img`
    width: 60px;
`

export const Logotipo = styled.h4`
    display: flex;
    align-items: center;
    color: var(--white);
    font-size: 16px;

    &:hover {
        cursor: default;
    }
`

export const Account = styled.img`
    width: 25px;
`
export const Logout = styled.img`
    width: 25px;

    &:hover {
        cursor: pointer;
    }
`

export const AccountType = styled.h5`
    color: var(--grey-2);
    font-size: 16px;
    font-weight: 300;

    display: flex;
    align-items: center;
    gap: .8rem;

    &:hover {
        cursor: default;
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    border: 1px solid var(--grey-2);
    border-radius: 2rem;
    // border: none;
    // border-bottom: 2px solid var(--grey-2);
    padding: .5rem;
    color: var(--white);
    margin-right: auto;
    margin-left: 1rem;
`

export const SearchInput = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    width: 20vw;

    &::placeholder {
        color: var(--grey-2);
    }

    &:focus {
        color: var(--grey-2);
    }
    
`

export const SearchIcon = styled.img`
    width: 16px;
    margin-right: .5rem;
`