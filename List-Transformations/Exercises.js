const game = {
    'suspects':[
        {
            name: "Rusty",            
            color: "Orange"
        },
        {
            name: "Miss Scarlet",
            color: "Red"
        }
    ]
}
// First exercise
for(let i = 0; i < game.suspects.length; i++){
    console.log(game.suspects[i])
}
// Second exercise
for(let {name, color} of game.suspects){
    console.log(name,color)
}

//Third exercise
const {suspects: [{color:orange}, {color:red}]} = game //Destructuring the complete object
console.log(orange,red)