import { useState } from 'react';
import styled from 'styled-components';
import { mobile, tablet, desktop } from '../../responsive';
import { signin } from '../../apiCalls';
import { useAppSelector, useAppDispatch } from '../../hooks';
// import { useSelector, useDispatch } from 'react-redux';
import {} from '../../hooks';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import React from 'react';

const SigninContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://i.ibb.co/D7sXJPN/signin.jpg') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SigninWrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })};
    ${tablet({ width: '60%', height: '40%' })}
    ${desktop({ width: '75%', height: '37%' })}
`;

const SigninTitle = styled.h1`
    font-size: 24px;
    font-weight: 300;
    ${tablet({ fontSize: '30px' })};
    ${desktop({ fontSize: '40px' })}
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
    ${tablet({ fontSize: '23px', margin: '10px 1px' })}
    ${desktop({ fontSize: '30px', margin: '20px 3px' })}
`;

const SigninButton = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
    ${mobile({ width: '100%' })};
    ${tablet({ width: '100%', fontSize: '23px' })};
    ${desktop({ width: '100%', fontSize: '30px' })};
`;

const LinkButton = styled.a`
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

const Signin: React.FC = () => {
    const [username, setUsername] = useState<string | false>('');
    const [password, setPassword] = useState<string | false>('');
    const dispatch = useAppDispatch();
    const { isFetching, error } = useAppSelector((state: RootState) => state.user);

    const handleSignin = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        signin(dispatch, { username, password });
    };

    return (
        <SigninContainer>
            <SigninWrapper>
                <SigninTitle>SIGN IN</SigninTitle>
                <SigninForm>
                    <SigninInput
                        placeholder="username"
                        type="text"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                    />
                    <SigninInput
                        placeholder="password"
                        type="password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    />
                    <SigninButton onClick={handleSignin} disabled={isFetching}>
                        Signin
                    </SigninButton>
                    {error && <Error>Something went wrong...</Error>}
                    <LinkButton>FORGOT THE PASSWORD?</LinkButton>
                    <Link to="/signup">
                        <LinkButton style={{ textDecoration: 'none' }}>CREATE A NEW ACCOUNT</LinkButton>
                    </Link>
                </SigninForm>
            </SigninWrapper>
        </SigninContainer>
    );
};

export default Signin;
