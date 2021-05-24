const mensagemSecreta = [
    'Aprender',
    'não',
    'é',
    'o',
    'sobre',
    'que',
    'você',
    'consegue',
    'facilmente',
    'na',
    'primeira',
    'vez,',
    'mas',
    'sobre',
    'o',
    'que',
    'você',
    'pode',
    'descobrir.',
    '↵-2015',
    'Chris',
    'Pine',
    'Aprenda',
    'JavaScript',
];
var index = mensagemSecreta.indexOf('facilmente')  
mensagemSecreta.pop()
mensagemSecreta.push("a", "programar")
mensagemSecreta[index] = "certo"
mensagemSecreta.shift()
mensagemSecreta.unshift('Programação')
mensagemSecreta.forEach(element => {
    if (element ==='consegue'){
       indexes = mensagemSecreta.indexOf(element)
       mensagemSecreta.splice(indexes,5, "sabe")
    }
});
finalAnswer = mensagemSecreta.join(" ")

console.log(finalAnswer)