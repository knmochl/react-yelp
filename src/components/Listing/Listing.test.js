import React from 'react'
import { shallow } from 'enzyme'

import Listing from './Listing'

describe('<Listing />', () => {
  let wrapper
  const places = [{
    name: 'Chicago'
  }, {
    name: 'San Francisco'
  }]

  beforeEach(() => {
    wrapper = shallow(<Listing places={places} />)
  })

  it('has an item for each place in the places prop', () => {
    expect(wrapper.find('Item').length).toEqual(places.length)
  })
})
