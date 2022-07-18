import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import Gallery from "..";
import { get } from "http";
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup);

describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery
            currentCategory={portrait}
        ></Gallery>)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery
            currentCategory={portrait}
        ></Gallery>)
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders', () => {
        const { getByTestId } = render(<Gallery
            currentCategory={portrait}
        ></Gallery>)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    });
});