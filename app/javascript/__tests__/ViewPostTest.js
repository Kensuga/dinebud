import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ViewPost from '../pages/ViewPost'

Enzyme.configure({ adapter: new Adapter() })


it('ViewPost renders without crashing', () => {
  const div = document.createElement('div')
  let profiles = [
  {
    name: "George",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/2019-nfl-draft-red-carpet-5cc72094d4e4e73649000006.jpg",
    bio: "I wunt sum tacos my dude",
    user_id: 1
  }
  ];
  let posts = [
  {
    location: "Taco Bell",
    schedule_time: Date.current,
    active: true,
    user_id: 1
  }]
  let current_user = {
      id:1
  }
  ReactDOM.render(<ViewPost profiles={profiles} post={posts} current_user={current_user}/>, div)
})