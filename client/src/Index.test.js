import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rating from './Rating/Rating.jsx';
import Button from './Button/Button.jsx';
import Calendar from './Calendar/Calendar.jsx';
import Fees from './Fees/Fees.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating', () => {

  test('should show text', ()=> {
    const wrapper = shallow(<Rating/>);
    const num = wrapper.find('div div');
    expect(num.text()).toBe('5 (15)');
  });
});

describe('Button', () => {
  test('should render button', ()=> {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.btn-red')).toHaveLength(1);
  });
});

describe('Calendar', () => {
  test('should call the  function', () => {
    const wrapper = shallow(<Calendar />);
    //calendar = calendar.find('div');
    expect(wrapper.find('outer-box')).toHaveLength(0);
  });

});

describe('Fees', () => {
  test('Fees on Render should be false', () => {
    let props = {
      fees: {
        nights: 2,
        cleanigFee: 40,
        price: 200,
        serviceFee: 30,
        total: 470,
      }
    };
    const wrapper = shallow(<Fees props =  />);
    //calendar = calendar.find('div');
    expect(wrapper.find('')).toHaveLength(0);
  });

});