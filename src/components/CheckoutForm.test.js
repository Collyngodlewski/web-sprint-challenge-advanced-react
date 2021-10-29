import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText(/first name/i);
    userEvent.type(firstName, 'Collyn');

    const lastName = screen.getByLabelText(/last name/i);
    userEvent.type(lastName, 'Godlewski');

    const address = screen.getByLabelText(/address/i);
    userEvent.type(address,'123 applesauce st');

    const city = screen.getByLabelText(/city/i);
    userEvent.type(city, 'muskegon');

    const state = screen.getByLabelText(/state/i);
    userEvent.type(state, 'MI');

    const zip = screen.getByLabelText(/zip/i);
    userEvent.type(zip, '49445');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const success = screen.getByTestId('successMessage');
    expect(success).toBeInTheDocument();

});
