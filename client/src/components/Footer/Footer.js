import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import { mobile } from '../.././responsive';

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
  background-color: #${props => props.color};
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

const Footer = () => {
  return (
    <FooterContainer>
      <LeftFooter>
        <FooterLogo>BETTER BUYS</FooterLogo>
        <FooterDescription>
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
          Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
          convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
          Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
          Fusce ac turpis quis ligula lacinia aliquet.
        </FooterDescription>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </LeftFooter>
      <FooterCenter>
        <FooterTitle>Useful Links</FooterTitle>
        <FooterList>
          <FooterListItem>Home</FooterListItem>
          <FooterListItem>Cart</FooterListItem>
          <FooterListItem>Phones</FooterListItem>
          <FooterListItem>Accessories</FooterListItem>
          <FooterListItem>My Account</FooterListItem>
          <FooterListItem>Order Tracking</FooterListItem>
          <FooterListItem>Wishlist</FooterListItem>
          <FooterListItem>Terms</FooterListItem>
        </FooterList>
      </FooterCenter>
      <FooterRight>
        <FooterTitle>Contact</FooterTitle>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 123 Zzyzx Road, California
          56789
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +1 234 567 8910
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> contact@lama.dev
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
