/*Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

let arr =[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

const extractValue=(arr, key)=>{
    let valor = arr.map(element =>{
            return element[key]
        })
    return valor 
}

console.log(extractValue(arr,"name"))
