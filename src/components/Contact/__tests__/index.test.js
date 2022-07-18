import React from 'react';
import ContactForm from '..';
import{render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<ContactForm></ContactForm>)
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders h1 tag', () => {
        const {getByTestId} = render(<ContactForm></ContactForm>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    })

    it('renders button', () => {
        const {getByTestId} = render(<ContactForm></ContactForm>);
        expect(getByTestId('btntag')).toHaveTextContent('Submit');
    })
});
