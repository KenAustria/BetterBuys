import Category from './Category';
import { categories } from '../data';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map(category => (
        <Category category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
