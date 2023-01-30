import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
// import { Badge, Link } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from '../../responsive';
import { RootState } from '../../store';
import React from 'react';

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
    /* ${mobile({ justifyContent: 'flex-start' })} */
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
    const cartQuantity = useAppSelector((state: RootState) => state.cart.cartQuantity);
    const { currentUser } = useAppSelector((state: RootState) => state.user);

    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavLeft>
                    <Language>EN</Language>
                    <SearchContainer>
                        <SearchInput />
                        <Search style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </NavLeft>
                <NavCenter>
                    <Logo>Better Buys</Logo>
                </NavCenter>
                {!currentUser ? (
                    <NavRight>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <MenuItem>SIGN UP</MenuItem>
                        </Link>
                        <Link to="signin" style={{ textDecoration: 'none' }}>
                            <MenuItem>SIGN IN</MenuItem>
                        </Link>
                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={cartQuantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </NavRight>
                ) : (
                    <NavRight>
                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={cartQuantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </NavRight>
                )}
            </NavbarWrapper>
        </NavbarContainer>
    );
};

export default Navbar;
