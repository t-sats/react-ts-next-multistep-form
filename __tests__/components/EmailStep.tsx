import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import EmailStep from '@/components/insurance-flow/EmailStep';

test('shows an error for incorrect email value when the next button is clicked', () => {
  const { getByText, getByLabelText } = render(<EmailStep />);
  const emailInput = getByLabelText("Email:");
  const nextButton = getByText("Next");
  const error = "Please enter valid email";

  fireEvent.change(emailInput, { target: { value: "test" } });
  fireEvent.click(nextButton);

  expect(getByText(error)).toBeInTheDocument();
});

test('shows an error for empty email value when the next button is clicked', () => {
  const { getByText, getByLabelText } = render(<EmailStep />);
  const emailInput = getByLabelText("Email:");
  const nextButton = getByText("Next");
  const error = "Please enter valid email";

  fireEvent.change(emailInput, { target: { value: "" } });
  fireEvent.click(nextButton);

  expect(getByText(error)).toBeInTheDocument();
});

it('renders EmailStep component correctly', () => {
  const { container } = render(<EmailStep />)

  expect(container).toMatchSnapshot()
});
