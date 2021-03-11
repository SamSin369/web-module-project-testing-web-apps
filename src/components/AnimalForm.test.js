import React from 'react';
import { screen, render } from "@testing-library/react";
import AnimalForm from './AnimalForm';

test("renders AnimalForm without errors", ()=>{
    render(<AnimalForm />);
});

test("When the user fills out and submits form, species appears in animal list", ()=> {
    //Arrange: Setup our component
    render(<AnimalForm />);
    
    //Act:
    // - get the species input and add in a value

    // - get the age input and add in a value
    // - get the notes input and add in a value
    // - find and click submit button

    //Asset:
    // our species name should be on the the screen.
});