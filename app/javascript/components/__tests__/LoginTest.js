import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../pages/Login'

Enzyme.configure({ adapter: new Adapter() })


it('Login renders without crashing', () => {
  const div = document.createElement('div')
  const loginFunction = () => {
      return true
  }
  ReactDOM.render(<Login handleLoginSubmit= { loginFunction }/>, div)
})


it('Login renders content', () => {
  const login = mount(<Login />)
  expect(login.find('h1').text()).toEqual('DineBud')
})