import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import PetInsuranceForm from '@/components/insurance-flow/PetInsuranceForm';

test('shows an error for incorrect email value when the next button is clicked', () => {
  const { getByText, getByLabelText } = render(<PetInsuranceForm />);
  const emailInput = getByLabelText("Email:");
  const nextButton = getByText("Next");
  const error = "Please enter valid email";

  fireEvent.change(emailInput, { target: { value: "test" } });
  fireEvent.click(nextButton);

  expect(getByText(error)).toBeInTheDocument();
});

test('shows an error for empty email value when the next button is clicked', () => {
  const { getByText, getByLabelText } = render(<PetInsuranceForm />);
  const emailInput = getByLabelText("Email:");
  const nextButton = getByText("Next");
  const error = "Please enter valid email";

  fireEvent.change(emailInput, { target: { value: "" } });
  fireEvent.click(nextButton);

  expect(getByText(error)).toBeInTheDocument();
});

it('renders PetInsuranceForm component correctly', () => {
  const { container } = render(<PetInsuranceForm />)

  expect(container).toMatchSnapshot()
});
