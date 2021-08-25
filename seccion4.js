/*Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')

*/

let valor= "Elie"

const removeVowels=(str)=>{
    let resultado = str.toLowerCase().replace(/[aeiou]/g, '')
    return resultado
}

console.log(removeVowels(valor))

