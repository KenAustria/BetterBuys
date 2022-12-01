import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../.././responsive';

const CategoryContainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '20vh' })}
`;

const CategoryInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryTitle = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Category = ({ category }) => {
  return (
    <CategoryContainer>
      <Link to={`/products/${category.category}`}>
        <CategoryImage src={category.img} />
        <CategoryInfo>
          <CategoryTitle>{category.title}</CategoryTitle>
          <CategoryButton>SHOP NOW</CategoryButton>
        </CategoryInfo>
      </Link>
    </CategoryContainer>
  );
};

export default Category;
