import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HeaderForex from './HeaderForex';

configure({ adapter: new Adapter() });

let props, component

beforeAll(() => {

  props = {
    changeBaseCurrencyValue: jest.fn(),
    base: 10,
    baseCurrency: 'USD'
  }

  component = shallow(<HeaderForex {...props} />);
})

describe('HeaderForex Component Snapshot', () => {
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('baseCurrency props  should render correctly', () => {
    expect(component.find('h2').text()).toBe('USD');
  });

  it('base props as a value should render correctly', () => {
    expect(component.find('input').props().value).toBe(10)
  });

  it('changeBaseCurrencyValue props call with', () => {
    component.find('input').simulate('change', 200)
    expect(component
      .find('input')
      .props()
      .onChange
    ).toHaveBeenLastCalledWith(200)
  });

});
