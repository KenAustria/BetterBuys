import React from 'react';
import '@testing-library/jest-dom';
import { carouselSlides } from '../../../data';
import Carousel, { CarouselArrow } from '../Carousel';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

describe('Carousel', () => {
    it('verifies if the click on left arrow is handled correctly', async () => {
        const handleClick = jest.fn();
        renderWithProviders(
            <CarouselArrow direction="left" onClick={handleClick} aria-label="Previous Slide" tabIndex={0}>
                <ArrowLeftOutlined />
            </CarouselArrow>,
        );
        const leftArrow = screen.getByLabelText('Previous Slide');
        fireEvent.click(leftArrow);
        expect(handleClick).toHaveBeenCalled();
    });

    it('handles left arrow keydown', async () => {
        const handleKeyDown = jest.fn();
        renderWithProviders(
            <CarouselArrow direction="left" onKeyDown={handleKeyDown} aria-label="Previous Slide" tabIndex={0}>
                <ArrowLeftOutlined />
            </CarouselArrow>,
        );
        const leftArrow = screen.getByLabelText('Previous Slide');
        fireEvent.keyDown(leftArrow, { key: 'Enter', code: 13 });
        expect(handleKeyDown).toHaveBeenCalled();
    });

    it('renders the first slide by default', async () => {
        renderWithProviders(<Carousel />);
        const firstSlide = screen.getByRole('listitem');
        expect(firstSlide).toHaveAttribute('aria-hidden', 'false');
        expect(firstSlide).toHaveAttribute('aria-describedby', 'slide-0-desc');
    });

    it('updates the slide index when the right arrow is clicked', async () => {
        renderWithProviders(<Carousel />);
        const rightArrow = screen.getByLabelText('Next slide');
        fireEvent.click(rightArrow);
        const secondSlide = screen.getByRole('listitem');
        expect(secondSlide).toHaveAttribute('aria-hidden', 'false');
        expect(secondSlide).toHaveAttribute('aria-describedby', 'slide-1-desc');
    });

    it('updates the slide index when the left arrow is clicked', async () => {
        renderWithProviders(<Carousel />);
        const rightArrow = screen.getByLabelText('Next slide');
        fireEvent.click(rightArrow);
        const leftArrow = screen.getByLabelText('Previous Slide');
        fireEvent.click(leftArrow);
        const firstSlide = screen.getByRole('listitem');
        expect(firstSlide).toHaveAttribute('aria-hidden', 'false');
        expect(firstSlide).toHaveAttribute('aria-describedby', 'slide-0-desc');
    });

    it('renders all slides from the carouselSlides array', async () => {
        renderWithProviders(<Carousel />);
        carouselSlides.forEach((slide) => {
            expect(screen.getByText(slide.title)).toBeInTheDocument();
            expect(screen.getByText(slide.desc)).toBeInTheDocument();
        });
    });

    it('handles right arrow click', async () => {
        const handleClick = jest.fn();
        renderWithProviders(
            <CarouselArrow direction="right" onClick={handleClick} aria-label="Next slide" tabIndex={0}>
                <ArrowRightOutlined />
            </CarouselArrow>,
        );
        const rightArrow = screen.getByLabelText('Next slide');
        fireEvent.click(rightArrow);
        expect(handleClick).toHaveBeenCalled();
    });

    it('handles right arrow keydown', async () => {
        const handleKeyDown = jest.fn();
        renderWithProviders(
            <CarouselArrow direction="right" onKeyDown={handleKeyDown} aria-label="Next slide" tabIndex={0}>
                <ArrowRightOutlined />
            </CarouselArrow>,
        );
        const rightArrow = screen.getByLabelText('Next slide');
        fireEvent.keyDown(rightArrow, { key: 'Enter', code: 13 });
        expect(handleKeyDown).toHaveBeenCalled();
    });
});
