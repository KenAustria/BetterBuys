import React from 'react';
import NavRight from './NavRight';
import { Search } from '@material-ui/icons';
import {
    NavbarContainer,
    NavbarWrapper,
    NavLeft,
    Language,
    SearchContainer,
    SearchInput,
    NavCenter,
    Logo,
} from './Navbar.styles';

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavLeft>
                    <Language aria-label="language">EN</Language>
                    <SearchContainer>
                        <SearchInput aria-label="Search" role="textbox" />
                        <Search style={{ color: 'gray', fontSize: 16 }} data-testid="search-icon" aria-label="search" />
                    </SearchContainer>
                </NavLeft>
                <NavCenter>
                    <Logo role="heading" aria-label="Better Buys" tabIndex={0}>
                        Better Buys
                    </Logo>
                </NavCenter>
                <NavRight />
            </NavbarWrapper>
        </NavbarContainer>
    );
};

export default Navbar;
