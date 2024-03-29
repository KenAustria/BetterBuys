import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Promotion: React.FC = () => {
    return (
        <Container role="button" aria-label="flash sale">
            Flash Sale! Flash Sale! Flash Sale!
        </Container>
    );
};

export default Promotion;
