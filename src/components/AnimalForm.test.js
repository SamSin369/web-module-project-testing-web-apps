import React from 'react';
import { screen, render } from "@testing-library/react";
import AnimalForm from './AnimalForm';

test("renders AnimalForm without errors", ()=>{
    render(<AnimalForm />);
});