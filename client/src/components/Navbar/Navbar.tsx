import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from '../../responsive';
import { RootState } from '../../store';

const NavbarContainer = styled.div`
    height: 90px;
    ${mobile({ height: '50px' })}
`;

const NavbarWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0px' })}
`;

const NavLeft = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ display: 'none' })}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const SearchInput = styled.input`
    border: none;
    ${mobile({ width: '50px' })}
`;

const NavCenter = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ justifyContent: 'flex-end', textAlign: 'right' })}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: '16px' })}
`;

const NavRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar: React.FC = () => {
    // Use the `useAppSelector` hook to get the `cartQuantity` value from the Redux store
    const cartQuantity = useAppSelector((state: RootState) => state.cart.cartQuantity);
    // Use the `useAppSelector` hook to get the `currentUser` value from the Redux store
    const { currentUser } = useAppSelector((state: RootState) => state.user);

    return (
        // <Router>
        <NavbarContainer>
            <NavbarWrapper>
                <NavLeft>
                    <Language aria-label="language">EN</Language>
                    <SearchContainer>
                        <SearchInput aria-label="Search" />
                        <Search style={{ color: 'gray', fontSize: 16 }} data-testid="search-icon" aria-label="search" />
                    </SearchContainer>
                </NavLeft>
                <NavCenter>
                    <Logo aria-label="Better Buys">Better Buys</Logo>
                </NavCenter>
                {!currentUser ? (
                    /* If the currentUser is not logged in, display the links for
                        Sign Up and Sign In, and a cart icon with the quantity of items in the cart */
                    <NavRight>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <MenuItem aria-label="Sign Up">SIGN UP</MenuItem>
                        </Link>
                        <Link to="signin" style={{ textDecoration: 'none' }}>
                            <MenuItem aria-label="Sign In">SIGN IN</MenuItem>
                        </Link>
                        <Link to="/cart">
                            <MenuItem aria-label={`Cart (${cartQuantity})`}>
                                <Badge badgeContent={cartQuantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </NavRight>
                ) : (
                    /* If the currentUser is logged in, only display the cart icon 
                        with the quantity of items in the cart */
                    <NavRight>
                        <Link to="/cart">
                            <MenuItem aria-label={`Cart (${cartQuantity})`}>
                                <Badge badgeContent={cartQuantity} color="primary">
                                    <ShoppingCartOutlined data-testid="cart-icon" />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </NavRight>
                )}
            </NavbarWrapper>
        </NavbarContainer>
        // </Router>
    );
};

export default Navbar;
