import styled from 'styled-components';
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import { mobile } from '../../responsive';
import React from 'react';

const FooterContainer = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`;

const LeftFooter = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const FooterLogo = styled.h1``;

const FooterDescription = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const FooterCenter = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`;

const FooterTitle = styled.h3`
    margin-bottom: 30px;
`;

const FooterList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const FooterListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const FooterRight = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <LeftFooter>
                <FooterLogo alt="Better Buys logo">BETTER BUYS</FooterLogo>
                <FooterDescription hidden>
                    Copyright © 2023 Better Buys. All rights reserved. Stay Connected with Us:
                </FooterDescription>
                <SocialContainer role="presentation">
                    <SocialIcon color="3B5999" title="Follow us on Facebook">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F" title="Follow us on Instagram">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE" title="Follow us on Twitter">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023" title="Follow us on Pinterest">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </LeftFooter>
            <FooterCenter role="complementary">
                <FooterTitle>Useful Links</FooterTitle>
                <FooterList aria-label="Footer Navigation">
                    <FooterListItem>
                        <a href="#home">Home</a>
                    </FooterListItem>
                    <FooterListItem>
                        <a href="#cart">Cart</a>
                    </FooterListItem>
                    <FooterListItem>
                        <a href="#phones">Phones</a>
                    </FooterListItem>
                    <FooterListItem>
                        <a href="#accessories">Accessories</a>
                    </FooterListItem>
                    <FooterListItem>
                        <a href="#my-account">My Account</a>
                    </FooterListItem>
                    <FooterListItem>
                        <a href="#order-tracking">Order Tracking</a>
                    </FooterListItem>
                    <FooterListItem>
                        <a href="#wishlist">Wishlist</a>
                    </FooterListItem>
                    <FooterListItem>
                        <a href="#terms">Terms</a>
                    </FooterListItem>
                </FooterList>
            </FooterCenter>
            <FooterRight role="complementary">
                <FooterTitle>Contact</FooterTitle>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} /> 123 Zzyzx Road, California 56789
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} /> +1 234 567 8910
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: '10px' }} /> kenaustria@dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Accepted Payment Methods" />
            </FooterRight>
        </FooterContainer>
    );
};

export default Footer;
