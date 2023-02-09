import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { signup } from '../../apiCalls';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { mobile, tablet, desktop } from '../../responsive';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const SignupContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
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
    ${tablet({ width: '60%', height: '45%' })}
	${desktop({ width: '75%', height: '40%' })}
`;

const SignupTitle = styled.h1`
    font-size: 24px;
    font-weight: 300;
    ${tablet({ fontSize: '30px' })};
    ${desktop({ fontSize: '40px' })}
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
    ${tablet({ fontSize: '23px', margin: '10px 1px' })}
    ${desktop({ fontSize: '30px', margin: '20px 3px' })}
`;

const SignupAgreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    ${desktop({ fontSize: '14px' })}
`;

const SignupButton = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    ${mobile({ width: '100%' })};
    ${tablet({ width: '100%', fontSize: '23px' })};
    ${desktop({ width: '100%', fontSize: '30px' })};
`;

export const LinkButton = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    ${tablet({ fontSize: '17px' })}
    ${desktop({ fontSize: '24px', margin: '10px' })}
`;

const Error = styled.span`
    color: red;
`;

const Signup: React.FC = () => {
    const [username, setUsername] = useState<string | false>('');
    const [email, setEmail] = useState<string | false>('');
    const [password, setPassword] = useState<string | false>('');
    const dispatch = useAppDispatch();
    const { isFetching, error } = useAppSelector((state: RootState) => state.user);

    const handleSignup = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        signup(dispatch, { username, email, password });
    };

    return (
        <SignupContainer>
            <SignupWrapper>
                <SignupTitle aria-label="create an account heading" role="heading" tabIndex={0}>
                    CREATE AN ACCOUNT
                </SignupTitle>
                <SignupForm aria-label="Sign up form" role="form">
                    <SignupInput
                        id="username"
                        value={username}
                        aria-label="username"
                        placeholder="username"
                        type="text"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                    />
                    <SignupInput
                        id="email"
                        value={email}
                        aria-label="email"
                        placeholder="email"
                        type="text"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                    />
                    <SignupInput
                        id="password"
                        value={password}
                        aria-label="password"
                        placeholder="password"
                        type="password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    />
                    <SignupAgreement aria-label="agreement" aria-hidden={false}>
                        By creating an account, I consent to the processing of my personal data in accordance with the{' '}
                        <b>PRIVACY POLICY</b>
                    </SignupAgreement>
                    <SignupButton
                        type="submit"
                        aria-label="sign up button"
                        aria-disabled={isFetching}
                        role="button"
                        tabIndex={0}
                        onClick={handleSignup}
                        disabled={isFetching}
                    >
                        SIGNUP
                    </SignupButton>
                    {error && (
                        <Error role="alert" aria-label="error">
                            Something went wrong...
                        </Error>
                    )}
                    <Link to="/signin" style={{ margin: '10px 0px' }}>
                        <LinkButton type="link" role="link" aria-label="sign up link">
                            SIGNIN ACCOUNT
                        </LinkButton>
                    </Link>
                </SignupForm>
            </SignupWrapper>
        </SignupContainer>
    );
};

export default Signup;
