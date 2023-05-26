var massiv = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, `uioo`]
var massivForNumbers=[]
var massivForStrings = []
var massivForNulls =[]
var massivForUndefineds = []

var massivGeneral = []
massivGeneral.push(massivForNumbers)
massivGeneral.push(massivForStrings)
massivGeneral.push(massivForNulls)
massivGeneral.push(massivForUndefineds)


for (i of massiv){
    if  ( i === Number(i)) {
        massivForNumbers.push(i)
    }else if (i===String(i)) {
        massivForStrings.push(i)
    }else if ( i === null){
        massivForNulls.push(i)
    }else if ( i === undefined){
        massivForUndefineds.push(i)
    }
}


console.log(massivGeneral.sort((a, b) => b.length - a.length))

