import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { NavRightContainer, MenuItem } from './NavRight.styles';
import { RootState } from '../../store';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { useAppSelector } from '../../hooks/useAppSelector';

const NavRight: React.FC = () => {
    const cartQuantity = useAppSelector((state: RootState) => state.cart.cartQuantity);
    const { currentUser } = useAppSelector((state: RootState) => state.user);

    if (!currentUser) {
        return (
            <NavRightContainer>
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
            </NavRightContainer>
        );
    }

    return (
        <NavRightContainer>
            <Link to="/cart">
                <MenuItem aria-label={`Cart (${cartQuantity})`}>
                    <Badge badgeContent={cartQuantity} color="primary">
                        <ShoppingCartOutlined data-testid="cart-icon" />
                    </Badge>
                </MenuItem>
            </Link>
        </NavRightContainer>
    );
};

export default NavRight;
