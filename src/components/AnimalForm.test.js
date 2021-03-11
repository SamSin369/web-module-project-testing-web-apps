import React from 'react';
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import AnimalForm from './AnimalForm';

test("renders AnimalForm without errors", ()=>{
    render(<AnimalForm />);
});

test("When the user fills out and submits form, species appears in animal list", ()=> {
    //Arrange: Setup our component
    render(<AnimalForm />);

    const animal = "Lion";

    //Act:
    // - get the species input and add in a value
    const speciesInput = screen.getByLabelText("Species:");
    userEvent.type(speciesInput, animal);

    // - get the age input and add in a value
    const ageInput = screen.getByLabelText("Age:");
    userEvent.type(ageInput, "3");

    // - get the notes input and add in a value
    const notesInput = screen.getByLabelText("Notes:");
    userEvent.type(notesInput, "the cutest....");

    // - find and click submit button
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Asset:
    // our species name should be on the the screen.
    const animalText = screen.queryByText(animal);
    expect(animalText).toBeInTheDocument();
});