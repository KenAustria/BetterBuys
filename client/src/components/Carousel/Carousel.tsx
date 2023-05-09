import { v4 as uuidv4 } from 'uuid';
import { HTMLAttributes } from 'react';
import React, { useState } from 'react';
import { carouselSlides } from '../../data';
import { mobile, tablet } from '../../responsive';
import styled, { ThemedStyledProps } from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

interface CarouselArrowProps {
    direction: 'left' | 'right';
}

type CarouselWrapperProps = {
    slideIndex: number;
};

interface SlideProps extends HTMLAttributes<HTMLDivElement> {
    bg: string;
}

export const CarouselContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: 'none' })}
    ${tablet({ display: 'none' })}
`;

export const CarouselArrow = styled.div<CarouselArrowProps>`
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
    left: ${(props) => props.direction === 'left' && '10px'}; // if left, then 10px
    right: ${(props) => props.direction === 'right' && '10px'}; // if right, then 10px
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

export const CarouselWrapper = styled.div<CarouselWrapperProps>`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const CarouselSlide = styled.div<SlideProps>`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;

export const CarouselImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;
`;

export const CarouselImage = styled.img`
    height: 80%;
`;

export const CarouselInfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

export const CarouselSlideTitle = styled.h1`
    font-size: 70px;
`;

export const CarouselSlideDesc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Carousel: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const handleClick = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setSlideIndex((slideIndex - 1 + 3) % 3);
        } else {
            setSlideIndex((slideIndex + 1) % 3);
        }
    };

    const handleKeyDown = (direction: 'left' | 'right', event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleClick(direction);
        }
    };

    return (
        <CarouselContainer>
            <CarouselArrow
                direction="left"
                onClick={() => handleClick('left')}
                onKeyDown={(event) => handleKeyDown('left', event)}
                aria-label="Previous Slide"
                tabIndex={0}
            >
                <ArrowLeftOutlined />
            </CarouselArrow>
            <CarouselWrapper slideIndex={slideIndex}>
                {carouselSlides.map((carouselSlide, index) => (
                    <CarouselSlide
                        bg={carouselSlide.bg}
                        key={uuidv4()}
                        role="listitem"
                        aria-hidden={index !== slideIndex}
                        aria-describedby={`slide-${index}-desc`}
                    >
                        <CarouselImgContainer>
                            <CarouselImage src={carouselSlide.img} alt="carousel image" />
                        </CarouselImgContainer>
                        <CarouselInfoContainer>
                            <CarouselSlideTitle aria-label="carousel slide title">
                                {carouselSlide.title}
                            </CarouselSlideTitle>
                            <CarouselSlideDesc id={`slide-${index}-desc`} aria-label="carousel slide desc">
                                {carouselSlide.desc}
                            </CarouselSlideDesc>
                        </CarouselInfoContainer>
                    </CarouselSlide>
                ))}
            </CarouselWrapper>
            <CarouselArrow
                direction="right"
                onClick={() => handleClick('right')}
                onKeyDown={(event) => handleKeyDown('right', event)}
                aria-label="Next slide"
                tabIndex={0}
            >
                <ArrowRightOutlined />
            </CarouselArrow>
        </CarouselContainer>
    );
};

export default Carousel;
