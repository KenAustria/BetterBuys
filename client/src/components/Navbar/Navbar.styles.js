import styled from 'styled-components';
import { mobile } from '../../responsive';

export const NavbarContainer = styled.div`
    height: 90px;
    @media (max-width: ${mobile}px) {
        height: 50px;
    }
`;

export const NavbarWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${mobile}px) {
        padding: 10px 0px;
    }
`;

export const NavLeft = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media (max-width: ${mobile}px) {
        display: none;
    }
`;

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    @media (max-width: ${mobile}px) {
        display: none;
    }
`;

export const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

export const SearchInput = styled.input`
    border: none;
    @media (max-width: ${mobile}px) {
        width: 50px;
    }
`;

export const NavCenter = styled.div`
    flex: 1;
    text-align: center;
    @media (max-width: ${mobile}px) {
        justify-content: flex-end;
        text-align: right;
    }
`;

export const Logo = styled.h1`
    font-weight: bold;
    @media (max-width: ${mobile}px) {
        font-size: 16px;
    }
`;
