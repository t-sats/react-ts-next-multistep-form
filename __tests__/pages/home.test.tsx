import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/pages/index';

it('renders Home page correctly', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
