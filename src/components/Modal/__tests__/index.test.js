import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const MockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park Bench',
    category: 'landscape',
    description:'Lorem ipsum',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={MockToggleModal} />)
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Modal currentPhoto={currentPhoto} onClose={MockToggleModal} />)
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={MockToggleModal}
            currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'));
        expect(MockToggleModal).toHaveBeenCalledTimes(1);
    })
})