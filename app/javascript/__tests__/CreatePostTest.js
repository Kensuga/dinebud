import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CreatePost from '../pages/CreatePost'

Enzyme.configure({ adapter: new Adapter() })


it('CreatePost renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CreatePost />, div)
})