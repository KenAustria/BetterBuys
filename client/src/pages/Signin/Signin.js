import styled from 'styled-components';

const SigninContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://ibb.co/mt7RcmS') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SigninWrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const SigninTitle = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SigninInput = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const SigninButton = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const SigninLink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Signin = () => {
  return (
    <SigninContainer>
      <SigninWrapper>
        <SigninTitle>SIGN IN</SigninTitle>
        <SigninForm>
          <SigninInput placeholder='username' />
          <SigninInput placeholder='password' />
          <SigninButton>Signin</SigninButton>
          <SigninLink>FORGOT THE PASSWORD?</SigninLink>
          <SigninLink>CREATE A NEW ACCOUNT</SigninLink>
        </SigninForm>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
