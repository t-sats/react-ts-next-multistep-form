import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import UserNameStep from "@/components/insurance-flow/UserNameStep";

test('shows an error for incorrect firstName value when the next button is clicked', () => {
  const { getByText, getByLabelText } = render(<UserNameStep />);
  const firstName = getByLabelText("First Name:");
  const nextButton = getByText("Next");
  const error = "Please enter valid First Name or Last Name";

  fireEvent.change(firstName, { target: { value: "test" } });
  fireEvent.click(nextButton);

  expect(getByText(error)).toBeInTheDocument();
});

test('shows an error for empty firstName value when the next button is clicked', () => {
  const { getByText, getByLabelText } = render(<UserNameStep />);
  const firstName = getByLabelText("First Name:");
  const nextButton = getByText("Next");
  const error = "Please enter valid First Name or Last Name";

  fireEvent.change(firstName, { target: { value: "" } });
  fireEvent.click(nextButton);

  expect(getByText(error)).toBeInTheDocument();
});

it('renders UserNameStep component correctly', () => {
  const { container } = render(<UserNameStep />)

  expect(container).toMatchSnapshot()
});
