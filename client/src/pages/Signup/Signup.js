import { useState } from 'react'
import styled from 'styled-components';
import { mobile } from '../.././responsive';
import { signup } from '../../apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://i.ibb.co/XZpSNgM/pexels-photomix-company-1038628.jpg') center;
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

const Error = styled.span`
  color: red;
`;

const Signup = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector(state => state.user);

	const handleSignup = event => {
		event.preventDefault()
		signup(dispatch, { username, email, password })
	}

	return (
		<SignupContainer>
			<SignupWrapper>
				<SignupTitle>CREATE AN ACCOUNT</SignupTitle>
				<SignupForm>
					<SignupInput placeholder='username' type='text' onChange={event => setUsername(event.target.value)} />
					<SignupInput placeholder='email' type='text' onChange={event => setEmail(event.target.value)} />
					<SignupInput placeholder='password' type='password' onChange={event => setPassword(event.target.value)} />
					<SignupAgreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</SignupAgreement>
					<SignupButton onClick={handleSignup} disabled={isFetching}>SIGNUP</SignupButton>
					{error && <Error>Something went wrong...</Error>}
				</SignupForm>
			</SignupWrapper>
		</SignupContainer>
	);
};

export default Signup;
