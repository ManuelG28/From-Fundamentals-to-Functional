//Challenge
const confidential = {}
confidential.name = "Rusty"
confidential.room = "Kitchen"
confidential.weapon = "Candlestick"
const {name: nameA, weapon: weaponA, room: locationA} = confidential //I did this just for practice
console.log(nameA, weaponA, locationA)

const {name, weapon, location} = {name: "Rusty", weapon: "Candlestick", location: "Kitchen"} //Solution
console.log(name, weapon, location)

//Examples

let [,,c] = [1,2,3] //Skip 1 and 2
console.log(c)

let a = 1;
let b = 2;

[b,a] = [a,b] //Swapping variables easility without a temp variable

console.log(a,b)

let complicatedObj = {
    arrayProp: [
        "Zapp",
        {
            second: "Brannigan"
        }
    ]
};

let {arrayProp: [first, {second}]} =  complicatedObj


