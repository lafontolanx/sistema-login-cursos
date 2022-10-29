import React, { useContext } from "react";
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.svg';
import account from '../../assets/account.svg';
import search from '../../assets/search.svg';
import { AuthContext } from '../../Context/context'
import { 
    Container, 
    Content, 
    Logo, 
    Logotipo, 
    Account, 
    AccountType, 
    Logout,
    Search,
    SearchInput,
    SearchIcon
} from './styles';

interface HeaderProps{
    name: string;
}

export const Header = ({name}: HeaderProps) => {
    const { signOut } = useContext(AuthContext)

    return (
        <Container>
            <Content>
                <Logotipo>
                    <Logo src={logo} alt="Logo"/>
                    MindCourses
                </Logotipo>
                <Search>
                    <SearchInput type="text" placeholder="Search" />
                    <SearchIcon src={search} alt="Search Icon"/>
                </Search>
                <AccountType>{name}
                    <Account src={account} alt="Account"/>
                    <Logout src={logout} alt="Logout" onClick={signOut} />
                </AccountType>
            </Content>
        </Container>
    )
}