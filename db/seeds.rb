# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
user0 = User.create(first_name: 'Demo', last_name: 'User', email: 'demo@cornbase.com', password: 'buysomecorns')
# user1 = User.create(first_name: 'John', last_name: 'Ive', email: 'john1@aa.io', password: 'password')
# user2 = User.create(first_name: 'Kevin', last_name: 'Malone', email: 'jimmy2@aa.io', password: 'password')
# user3 = User.create(first_name: 'Albert', last_name: 'Einstein', email: 'albert@aa.io', password: 'password')
# user4 = User.create(first_name: 'Elliot', last_name: 'Levy', email: 'elliot4@aa.io', password: 'password')
# user5 = User.create(first_name: 'Jason', last_name: 'Statham', email: 'jason5@aa.io', password: 'password')
# user6 = User.create(first_name: 'Marc', last_name: 'Maxwell', email: 'marc6@aa.io', password: 'password')
# user7 = User.create(first_name: 'Nikola', last_name: 'Tesla', email: 'electricac@aa.io', password: 'password')
# user8 = User.create(first_name: 'Hannah', last_name: 'Montana', email: 'miley@aa.io', password: 'password')
