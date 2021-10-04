// ## 01 - Alphabet


// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"

function sortLetters(word){
    var array = word.split("")
    var rArray = array.sort()
    var total = rArray.join("")

    console.log(total)
}

    sortLetters("konexio")

// ## 02 - XOXO
// console.log("-----------------------------------------------------------------------------")

// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

function countEach(string){

    var xTotal = 0
    var oTotal = 0

    for ( var i = 0; i < string.length; i++){
        console.log(string[i])

        if(string[i] === "x"){
            xTotal++
        }else if(string[i] === "o"){
            oTotal++
        } 
    }

    
    if( xTotal === oTotal ){
        console.log(true)
    } else {
        console.log(false)
    }
}
countEach("xxxoooox")
console.log(countEach)

countEach("xox")
console.log(countEach)

// ## 03 - Palindrome
// console.log("-----------------------------------------------------------------------------")

// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

function checkPal(string = ""){
    
    var stringArray = string.split("")
        // console.log("la décomposition de la string : ", stringArray)
    var stringInverse = string.split("").reverse()
        // console.log("l'inverse de la string: ", stringInverse)

    for(var i = 0; i < stringInverse.length; i++){
        // console.log("resultat de array : ", stringArray[i])
        // console.log("resultat de inverse :", stringInverse[i])
        if(stringArray[i] !== stringInverse[i]){
            return "Nope"
        }  
    }
    return "Palindrome !"    
}

var check = checkPal("laptop")
console.log(check)

console.log(checkPal("racecar"))

// ## 04 - Swap

// - Créez une fonction `swap` qui reçoit une string en paramètre
// - La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
// - Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"

function swap(string){
    
    string.split("")
    console.log(string)
    for(var i = 0; i < string.lenght; i++){
        console.log(i)
        if(string[i] === string[i].toUpperCase()){
            console.log(string[i].toLowerCase)
        
        }else if(string[i] === string[i].toLowerCase()){
            console.log(string[i].toUpperCase)
        }
    }
}

var test = swap("Hello World")
console.log(test)
console.log(swap("Hello World"))

//  Bonus

// - Créez une fonction `makeItSpongeBob` qui reçoit une string en paramètre
// - La fonction retourne une string avec le même texte en alternant majuscule / minuscule
// - Appelez votre fonction avec l'argument "Javascript is easy" et vérifiez le résultat

// function makeItSpongeBob(string){
//     var spt = string.split("")
//         console.log(spt)
//     for(var i = 0; i < spt.length; i = i + 2){
//         // spt = spt[i].toUpperCase
//         // console.log(spt)
//         if(spt[i] === 0 || spt[i] % 2 === 0){
//             console.log(spt[i].toUpperCase)
//         }else if(spt[i] % 2 !== 0){
//             console.log(spt[i].toLowerCase)
//         }
//     }
// }

// makeItSpongeBob("Javascript is easy")
// console.log(makeItSpongeBob)

// ## ⭐ Bonus II

// - tester votre exercice 1 avec un mélange de lettres majuscules et minuscules. Est ce que cela fonctionne toujours ?
// - si non corrigez le !

// function sortLetters(word){
    
//     var array = word.split("")
//     var rArray = array.sort(
//         (a, b) => {
            
//             if (a.toLowerCase() > b.toLowerCase()) {
//                 return 1
            
//             }if (a.toUpperCase() < b.toLowerCase()) {
//                 return -1
//                 }
//                 return 0
//         }
//     )    
// }
//     var total = rArray.join("")
//     console.log(total)



//     sortLetters("kOneXiO")