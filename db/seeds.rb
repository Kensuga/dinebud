# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

profiles = [
  {
    name: "George",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/2019-nfl-draft-red-carpet-5cc72094d4e4e73649000006.jpg",
    bio: "I wunt sum tacos my dude",
    user_id: 1
  }
];

profiles.each do |attributes|
  Profile.create attributes
end


posts = [
  {
    location: "Taco Bell",
    schedule_time: Date.current,
    active: true,
    user_id: 1
  },
  {
    location: "McDonalds",
    schedule_time: Date.current,
    active: true,
    user_id: 1
  },
  {
    location: "Burger King",
    schedule_time: Date.current,
    active: false,
    user_id: 1
  }
  ]
  
posts.each do |attributes|
  Post.create attributes
end