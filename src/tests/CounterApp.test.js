import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";
describe("Test for counter app", () => {
  test("It should be show a counterApp", () => {
    const val = 10;
    const wrapper = shallow(<CounterApp value = {val}/>);
    //const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be show a defect value 100', () => {
    const val = 100;  
    const wrapper = shallow( <CounterApp value = { val }/>);
    const counterText = wrapper.find('h2').text().trim();
    
    expect(counterText).toBe( `${val}` );

  })
  
});
