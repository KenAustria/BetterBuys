import styled from 'styled-components';
import { mobile } from '../.././responsive';

const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://ibb.co/svQykGz') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupWrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const SignupTitle = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const SignupForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const SignupInput = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const SignupAgreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const SignupButton = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Signup = () => {
  return (
    <SignupContainer>
      <SignupWrapper>
        <SignupTitle>CREATE AN ACCOUNT</SignupTitle>
        <SignupForm>
          <SignupInput placeholder='name' />
          <SignupInput placeholder='last name' />
          <SignupInput placeholder='username' />
          <SignupInput placeholder='email' />
          <SignupInput placeholder='password' />
          <SignupInput placeholder='confirm password' />
          <SignupAgreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </SignupAgreement>
          <SignupButton>SIGNUP</SignupButton>
        </SignupForm>
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
