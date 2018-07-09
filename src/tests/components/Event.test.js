import { shallow } from 'enzyme';
import React from 'react'
import {Event} from './../../components/elements/Event'
import {Market} from './../../components/elements/Market'

it('Checks if Event renders h2', () => {
    let obj = {id:"", markets: [], name: ""};
    const wrapper = shallow(<Event key="0" event={obj} />);
    expect(wrapper.find('h2').length).toBe(1);
});

it('Checks if Event renders div', () => {
    let obj = {id:"", markets: [], name: ""};
    const wrapper = shallow(<Event key="0" event={obj} />);
    expect(wrapper.find('div').length).toBe(3);
});

it('Checks if Event renders Market', () => {
    let obj = {id:"", markets: [""], name: ""};
    const wrapper = shallow(<Event key="0" event={obj} />);
    expect(wrapper.find(<Market id="" key=""/>).length).toBe(0);
});