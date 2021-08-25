/*Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

let arr =[{name: 'Elie'}, {name: 'Ortiz'}, {name: 'Matt'}, {name: 'Colt'}]

const extractKey=(arr, key)=>{
    let valor = []
    for (let index = 0; index < arr.length; index++) {
        if(arr[index][key]){
            valor.push(arr[index][key])
        }
    }
    return valor
}

console.log(extractKey(arr,"name"))
