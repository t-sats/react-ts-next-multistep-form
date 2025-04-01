import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CarInsuranceForm from '@/components/insurance-flow/CarInsuranceForm';

test('shows an error for incorrect email value when the next button is clicked', () => {
  const { getByText, getByLabelText } = render(<CarInsuranceForm />);
  const emailInput = getByLabelText("Email:");
  const nextButton = getByText("Next");
  const error = "Please enter valid email";

  fireEvent.change(emailInput, { target: { value: "test" } });
  fireEvent.click(nextButton);

  expect(getByText(error)).toBeInTheDocument();
});

test('shows an error for empty email value when the next button is clicked', () => {
  const { getByText, getByLabelText } = render(<CarInsuranceForm />);
  const emailInput = getByLabelText("Email:");
  const nextButton = getByText("Next");
  const error = "Please enter valid email";

  fireEvent.change(emailInput, { target: { value: "" } });
  fireEvent.click(nextButton);

  expect(getByText(error)).toBeInTheDocument();
});

it('renders CarInsuranceForm component correctly', () => {
  const { container } = render(<CarInsuranceForm />)
  expect(container).toMatchSnapshot()
});
