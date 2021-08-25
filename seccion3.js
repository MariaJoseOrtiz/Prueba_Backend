/*Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.
Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
let array = [
    {
        first: 'Elie',
        last: "Schoppik"
    },
    {
        first: 'Tim',
         last: "Garcia", 
         isCatOwner: true
    },
    {
        first: 'Tim',
         last: "Gonzales", 
         isCatOwner: true
    },
    {
         first: 'Matt',
          last: "Lane" 
    }, 
    {
        first: 'Colt', 
        last: "Steele", 
        isCatOwner: true
    }]
const findInObj = (arr, key, searchValue) => {
    let valor = arr.filter(element =>{
        if(element[key]===searchValue){
            return element[key]
        }
    })
    return valor.length > 0 ? valor[0] : [];

}
console.log(findInObj(array,"first",'Tim'))