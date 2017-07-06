import React from 'react'
import { shallow } from 'enzyme'

import Item from './Item'

describe('<Item />', () => {
  let wrapper
  const place = {
    name: 'San Francisco'
  }
  beforeEach(() => {
    wrapper = shallow(<Item place={place} />)
  })

  it('contains a title component with yelp', () => {
    expect(wrapper.find('h1').first().text()).toEqual(place.name)
  })
  it('contains a rating', () => {
    expect(wrapper.find('Rating')).toBeDefined()
  })
})
