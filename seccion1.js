/*Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]

*/
let array =[
    {
        first: 'Elie',
        last:"Schoppik"
    }, 
    {
        first: 'Tim', 
        last:"Garcia",
        isCatOwner: true
    }, 
    {
        first: 'Matt', 
        last:"Lane"
    },
    {
        first: 'Colt',
        last:"Steele", 
        isCatOwner: true
    }
]
const filterByValue=(array, key)=>{
    const result = array.filter((array)=>array[key])
    return result
}

console.log(filterByValue(array,"isCatOwner"))