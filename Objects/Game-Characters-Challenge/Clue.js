/**
 * A simple representation to the board game called 'Clue'
 * With this challenge I've understood the difference between Arrays and Objects
 * and the big difference between brackets notation and dot notation
 */
const suspects = ["Mrs.White", "Mrs.Green","Colonel Mustard","Miss Scarlet","Mrs.Peacock","Mrs.Green"]

const rooms = ["Kitchen","Ballroom","Conservatory","Dining Room","Loungue","Hall","Study","Library","Conservatory"
,"Billiard room"]

const weapons = ["Candlestick","Dagger","Lead pipe","Revolver","Rope","Wrench"]

const confidential = {}

confidential.murder = suspects[Math.floor(Math.random() * suspects.length)]
confidential.place = rooms[Math.floor(Math.random() * rooms.length)]
confidential.weapon = weapons[Math.floor(Math.random() * weapons.length)]

console.log(confidential)