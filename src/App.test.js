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
    const header = screen.queryByText("Add New Animal");
    
    //Assert: header should exist on the screen
    expect(header).toBeInTheDocument();    
    
    // expect(1 === 2).toBeFalsy();
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