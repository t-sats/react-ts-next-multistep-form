import React from 'react';
import { render } from '@testing-library/react';
import AgeStep from '@/components/insurance-flow/AgeStep';

it('renders AgeStep component correctly', () => {
  const { container } = render(<AgeStep />)

  expect(container).toMatchSnapshot()
});
