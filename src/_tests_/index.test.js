import React from 'react';
import { render } from '@testing-library/react';
import Todo from '../components/Todo';

test('renders without throwing errors', () => {
    const wrapper = render(<Todo />);
    expect(wrapper).toMatchSnapshot();
})