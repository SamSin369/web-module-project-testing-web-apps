import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

test("renders App without errors", ()=> {
    render(<App/>);
});

test("when page loads, renders app header", ()=>{
    //Arrange: render our App component
    render(<App/>);

    //Act: Access our header
    const header = screen.getByText("Add Old Animal");
    console.log(header);

    //Assert: header should exist on the screen
    expect(header).toBeInTheDocument();
});












// basic test structure

// describe("Validation tests", ()=> {
//     test("Name of the test", ()=> {
//         console.log("Does the thing.");
//     });
    
//     test("Name of the test", ()=> {
//         console.log("Does the thing.");
//     });    
// });

// describe("Edge Cases", ()=> {
//     test("Name of the test", ()=> {
//         console.log("Does the thing.");
//     });
    
//     test("Name of the test", ()=> {
//         console.log("Does the thing.");
//     });    
// });