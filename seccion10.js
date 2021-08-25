/*Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
Examples:
    hasNoDuplicates([1,2,3,2]) // false
    hasNoDuplicates([1,2,3]) // true
*/

let arr=[1,2,3,2]
const hasNoDuplicates=(arr)=>{  
    let valuesSoFar = Object.create(null);
    for (let i = 0; i < arr.length; ++i) {
        let value = arr[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
console.log(hasNoDuplicates(arr))