import { shallow } from 'enzyme';
import React from 'react'
import {Market} from './../../components/elements/Market'
import {Selection} from './../../components/elements/Selection'

it('Checks if Market renders div', () => {
    let obj = {id:"MKT_1", selections: ["SEL_1", "SEL_2"], name: "Team to Win"};
    const wrapper = shallow(<Market id={obj.id} market={ {name: "MKT_1"} } />);
    expect(wrapper.find('div').length).toBe(2);
});

it('Checks if Market renders div', () => {
    let obj = {id:"MKT_1", selections: ["SEL_1", "SEL_2"], name: "Team to Win"};
    const wrapper = shallow(<Market id={obj.id} market={ {name: "MKT_1"} } />);
    expect(wrapper.find('p').length).toBe(1);
});

it('Checks if Market renders Selection component', () => {
    let obj = {id:"MKT_1", selections: ["SEL_1"], name: "Team to Win"};
    const wrapper = shallow(<Market id={obj.id} market={ {name: "MKT_1"} } />);
    expect(wrapper.find(<Selection market="MKT_1" id="SEL_1" />).length).toBe(0);
});