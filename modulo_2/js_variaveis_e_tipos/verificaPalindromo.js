// Solution 1:
function verificaPalindromo(text){
    if(!text || typeof(text) != typeof("")) return console.log("Entre um texto ou palavra válida");
    
    let textNoSpaces = text.replaceAll(" ", "");
    let textReversed = textNoSpaces.split("").reverse().join("");
    let res = (textNoSpaces === textReversed) ? "é" : "não é";
    let result = `O texto/palavra: "${text}", ${res} um palíndromo.`;
    console.log(result);
}

//Solution 2:
function verificaPalindromo2(text){
    if(!text || typeof(text) != typeof("")) return console.log("Entre um texto ou palavra válida");

    let text2 = text.replaceAll(" ", "");
    for (let i = 0; i < text2.length / 2 ; i++) {
        if (text2[i] !== text2[text2.length - 1 - i]) {
            return console.log(`O texto/palavra: "${text}", não é um palíndromo.`);
        }
    }
    return console.log(`O texto/palavra: "${text}", é um palíndromo.`);
}

verificaPalindromo2('roma me tem amor');

