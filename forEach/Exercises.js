
each = function (list, callback) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i],i);
        }
    }
    else{
        for(let property in list){
            callback(list[property],property)
        }
    }
}


const suspects = ["Mrs.White", "Mrs.Green","Colonel Mustard","Miss Scarlet","Mrs.Peacock","Mrs.Green"]
each(suspects,(item,index) => console.log(index,":",item))

const suspect = {name: "Colonel Mustard", weapon: "Knife", age: 24}
each(suspect,(item,index) => console.log(index,":",item))