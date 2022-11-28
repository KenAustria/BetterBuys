import { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { carouselSlides } from '../../data';
import { mobile } from '../.././responsive';
import { v4 as uuidv4 } from 'uuid';

const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

const CarouselArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'}; // if left, then 10px
  right: ${props =>
		props.direction === 'right' && '10px'}; // if right, then 10px
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const CarouselWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(
    ${props => props.slideIndex * -100}vw
  ); // direction on X-axis
`;

const CarouselSlide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

const CarouselImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const CarouselImage = styled.img`
  height: 80%;
`;

const CarouselInfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const CarouselSlideTitle = styled.h1`
  font-size: 70px;
`;

const CarouselSlideDesc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const CarouselButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Carousel = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = direction => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); // if not first slide, then -1, else last
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0); // if not last slide, then +1, else first
		}
	};

	return (
		<CarouselContainer>
			<CarouselArrow direction='left' onClick={() => handleClick('left')}>
				<ArrowLeftOutlined />
			</CarouselArrow>
			<CarouselWrapper slideIndex={slideIndex}>
				{carouselSlides.map(carouselSlide => (
					<CarouselSlide bg={carouselSlide.bg} key={uuidv4()}>
						<CarouselImgContainer>
							<CarouselImage src={carouselSlide.img} />
						</CarouselImgContainer>
						<CarouselInfoContainer>
							<CarouselSlideTitle>{carouselSlide.title}</CarouselSlideTitle>
							<CarouselSlideDesc>{carouselSlide.desc}</CarouselSlideDesc>
							<CarouselButton>SHOW NOW</CarouselButton>
						</CarouselInfoContainer>
					</CarouselSlide>
				))}
			</CarouselWrapper>
			<CarouselArrow direction='right' onClick={() => handleClick('right')}>
				<ArrowRightOutlined />
			</CarouselArrow>
		</CarouselContainer>
	);
};

export default Carousel;
