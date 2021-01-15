import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
   // Arrange: Render component
   render(<CheckoutForm/>);
   
   // Assert: Find the form header and verify it exists
   const header = screen.getByText(/checkout form/i);
   expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
   // Arrange: Render component
   render(<CheckoutForm/>);

   // Act: Execute Behavior
      // 1. Find all our form inputs
   const fNameInput = screen.getByLabelText(/first name/i);
   const lNameInput = screen.getByLabelText(/last name/i);
   const addressInput = screen.getByLabelText(/address/i);
   const cityInput = screen.getByLabelText(/city/i);
   const stateInput = screen.getByLabelText(/state/i);
   const zipInput = screen.getByLabelText(/zip/i);

      // 2. Fill out form with details
   userEvent.type(fNameInput, 'John');
   userEvent.type(lNameInput, 'Doe');
   userEvent.type(addressInput, '123 N Main Street');
   userEvent.type(cityInput, 'Big City');
   userEvent.type(stateInput, 'New York');
   userEvent.type(zipInput, '01234');

      // 3. Push the submit button
   const button = screen.getByRole('button');
   userEvent.click(button);

   // Assert: Success message shows with form details
      // 1. Finding and checking success message shows
   const successMessage = screen.getByText(/You have ordered some plants! Woo-hoo!/i);
   
   expect(successMessage).toBeInTheDocument();

      // 2. Finding and checking submitted form information shows
   const submittedName = screen.getByText(/john doe/i);
   const submittedAddressLine1 = screen.getByText(/123 n main street/i);
   const submittedAddressLine2 = screen.getByText(/big city, new york 01234/i);

   expect(submittedAddressLine1).toBeInTheDocument();
   expect(submittedName).toBeInTheDocument();
   expect(submittedAddressLine2).toBeInTheDocument();
   
});
