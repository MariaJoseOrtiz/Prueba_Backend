/*Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/
let arr =[1,2,3,4,5]
let arr2 =[4,4,4,4,4,4]
const doubleOddNumbers =(arr)=>{
    let impares = arr.filter(elemento =>{
        if(elemento%2 !== 0 ){ 
            return elemento 
        } 
    })
    let duplicado = impares.map(elemento =>{
        return elemento = elemento * 2
    })

    return duplicado
}
console.log(doubleOddNumbers(arr))
console.log(doubleOddNumbers(arr2))