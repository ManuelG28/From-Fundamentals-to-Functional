// A native implementation of filter

const filter = function(list,callback){
    const returnedArray = [];

    list.forEach(element => {
        if(callback(element)) returnedArray.push(element)
    })
    return returnedArray;
}

const newArray = [0,1,2,3,4,5,6,7,8]

console.log(filter(newArray, number => number % 2 === 0))

// A real using of filter

const data = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'New Suspect',
        present: false,
        rooms: []
    }
];

const suspects = filter(data, item => item.present );

console.log(suspects)