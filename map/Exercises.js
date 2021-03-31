// A simple application to map function
let weapons = ["Candlestick","Dagger","Lead pipe","Revolver","Rope","Wrench"]

const makeBroken = (item) => `Broken ${item}`

weapons = weapons.map(makeBroken)

console.log(weapons)

// A native implementation of map

function map(list,callback){
    const returnedList = [];

    for(let i = 0; i < list.length; i++){
        returnedList.push(callback(list[i],i,list));
    }

    return returnedList
}