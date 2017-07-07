import React from 'react'
import { shallow, mount } from 'enzyme'

import { Item, ItemName } from './Item'

describe('<Item />', () => {
  let wrapper
  const place = {
    name: 'San Francisco'
  }
  beforeEach(() => {
    wrapper = mount(<Item place={place} />)
  })

  it('contains a title component', () => {
    expect(wrapper.find(ItemName)).toHaveLength(1)
  })
  it('contains a title component with place name', () => {
    expect(wrapper.find(ItemName).text()).toEqual(place.name)
  })
  it('contains a rating', () => {
    expect(wrapper.find('Rating')).toBeDefined()
  })
})
