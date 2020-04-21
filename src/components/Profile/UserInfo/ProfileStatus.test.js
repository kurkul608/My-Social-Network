import React from "react";
import { create, act } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

let root;
describe("ProfileStatus component", () => {
  test("Status from props should be in state", () =>{
    // const component = create(<ProfileStatus status="Molchanov.com"/>)
      root = create(<ProfileStatus status="Molchanov.com"/>);

    // const instance = component.getInstance();
    expect (root.getInstance().state.status).toBe("Molchanov.com")
  })
})