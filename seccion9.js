/*Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
let str = "PaRALelEPipeDo"

const vowelCount=(str)=>{
    let vocales={}

    let array = str.toLowerCase().split('')
    array.forEach(element => {
        if(element ==="a"){
            vocales.a =str.toLowerCase().match(/[a]/gi).length
        }
        if(element==="e"){
            vocales.e =str.toLowerCase().match(/[e]/gi).length
        }
        if(element==="i"){
            vocales.i =str.toLowerCase().match(/[i]/gi).length
        }
        if(element==="o"){
            vocales.o =str.toLowerCase().match(/[o]/gi).length
        }
        if(element==="u"){
            vocales.u =str.toLowerCase().match(/[u]/gi).length
        }

    });
    
    return vocales
}

console.log(vowelCount(str))
