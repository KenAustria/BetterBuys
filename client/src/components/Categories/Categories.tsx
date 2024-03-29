import Category from './Category';
import { categories } from '../../data';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

const CategoriesContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: '0px', flexDirection: 'column' })}
`;

const Categories: React.FC = () => {
    return (
        <CategoriesContainer role="img" aria-label="categories container">
            {categories.map((category) => (
                <Category category={category} key={uuidv4()} aria-label={`category-${category.title}`} />
            ))}
        </CategoriesContainer>
    );
};

export default Categories;
