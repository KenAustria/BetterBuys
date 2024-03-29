import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from '../../responsive';
import React from 'react';

const NewsletterContainer = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ height: '40vh' })}
`;
const NewsletterTitle = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const NewsletterDescription = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: 'center' })}
`;

const NewsletterInputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: '80%' })}
`;

const NewsletterInput = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const NewsletterButton = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`;

const Newsletter: React.FC = () => {
    return (
        <NewsletterContainer>
            <NewsletterTitle aria-label="Newsletter">Newsletter</NewsletterTitle>
            <NewsletterDescription aria-label="newsletter description">
                Keep up with our latest news. Sent once a week. Every week.
            </NewsletterDescription>
            <NewsletterInputContainer>
                <NewsletterInput placeholder="Email" aria-label="Email" />
                <NewsletterButton aria-label="Subscribe">
                    <Send />
                </NewsletterButton>
            </NewsletterInputContainer>
        </NewsletterContainer>
    );
};

export default Newsletter;
