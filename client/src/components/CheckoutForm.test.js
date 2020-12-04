import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  //Arrange: Setup React Component
  render(<CheckoutForm />);

  //Act: Execute our behavior
  //  1. Query for form elements
  //  2. Type into form elements
  //  3. Query for form button
  //  4. Click form button

  const fNameInput = screen.getByLabelText(/first name:/i);
  const lNameInput = screen.getByLabelText(/last name:/i);
  const addressInput = screen.getByLabelText(/address:/i);
  const cityInput = screen.getByLabelText(/city:/i);
  const stateInput = screen.getByLabelText(/state:/i);
  const zipInput = screen.getByLabelText(/zip:/i);

  userEvent.type(fNameInput, 'Jay');
  userEvent.type(lNameInput, 'Ponce de Leon');
  userEvent.type(addressInput, '123 Street');
  userEvent.type(cityInput, 'Miami');
  userEvent.type(stateInput, 'Florida');
  userEvent.type(zipInput, '12345');

  const button = screen.getByRole('button');
  userEvent.click(button);

  //Assert: Test our App response
  //  1. Find our success message
  //  2. check it has the form details

  const newSuccess = screen.getByTestId('successMessage');
  expect(newSuccess).toBeInTheDocument();

  const newfName = screen.getByText(/jay/i);
  const newlName = screen.getByText(/ponce de leon/i);
  const newAddress = screen.getByText(/123 street/i);
  const newCity = screen.getByText(/miami/i);
  const newState = screen.getByText(/florida/i);
  const newZip = screen.getByText(/12345/i);

  expect(newfName).toBeInTheDocument();
  expect(newlName).toBeInTheDocument();
  expect(newAddress).toBeInTheDocument();
  expect(newCity).toBeInTheDocument();
  expect(newState).toBeInTheDocument();
  expect(newZip).toBeInTheDocument();

});
