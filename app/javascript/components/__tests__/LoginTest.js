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

it('Login renders h1', () => {
  const login = mount(<Login />)
  expect(login.find('h1').text()).toEqual('DineBud')
})

it('p tags render content', () => {
  const login = mount(<Login />)
  expect(login.find('p').exists()).toEqual(true);
})
it('h2 tags render content', () => {
  const login = mount(<Login />)
  expect(login.find('h2').exists()).toEqual(true);
})
it('h3 tags render content', () => {
  const login = mount(<Login />)
  expect(login.find('h3').exists()).toEqual(true);
})

it('input email capture text onChange, login case', () => {
  const login = mount(<Login/>)
  const input = login.find('input').at(0)
  input.instance().value = 'test@gmail.com'
  input.simulate('change')
  expect(login.state().loginUser.email).toEqual('test@gmail.com')
})
it('input pass capture pass onChange, login case ', () => {
  const login = mount(<Login/>)
  const input = login.find('input').at(1)
  input.instance().value = 'mypassword'
  input.simulate('change')
  expect(login.state().loginUser.password).toEqual('mypassword')
})

it('input email capture text onChange, signup case', () => {
  const login = mount(<Login/>)
  login.setState({
    sign_in:false
  })
  const input = login.find('input').at(0)
  input.instance().value = 'myemail@gmail.com'
  input.simulate('change')
  expect(login.state().newUser.email).toEqual('myemail@gmail.com')
})
it('input password capture text onChange, signup case', () => {
  const login = mount(<Login/>)
  login.setState({
    sign_in:false
  })
  const input = login.find('input').at(1)
  input.instance().value = 'passcase2'
  input.simulate('change')
  expect(login.state().newUser.password).toEqual('passcase2')
})

