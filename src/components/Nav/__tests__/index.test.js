import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    })
})

//test to see if the camera emoji is visible
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const {getByLabelText} = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    });
})

//texting if nav links are rendered and visible 
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const {getByTestId} = render(<Nav />)
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    })
})