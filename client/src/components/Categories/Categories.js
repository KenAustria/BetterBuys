import Category from './Category';
import { categories } from '../data';
import styled from 'styled-components';
import { mobile } from '../.././responsive';

const CategoriesContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
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
