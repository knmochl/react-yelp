import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

it('contains a title component with yelp', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('h1').first().text()).toEqual('Yelp')
})

it('contains a section menu with the title', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('section').first().text()).toEqual('Fullstack.io')
})
