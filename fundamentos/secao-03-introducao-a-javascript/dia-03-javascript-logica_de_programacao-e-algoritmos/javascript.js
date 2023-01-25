//Fatorial
let n = 10;
let fatorial = n;
for(let i = 1; i<n; i++){
   fatorial *= i ;
}

console.log("O fatorial de",n,"é:",fatorial);

//Inverter Palavra
let word = "tryber";
let split_word = word.split("");
let word_invert = [];
console.log("Palavra original:",word)
for(let i =1;i<=word.length;i++)
{
    word_invert[i-1] = split_word[word.length-i];
}
word = word_invert.join("");
console.log("Palavra invertida:",word);

//Maior e menor palavras do array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = 0;
let menor = 99;
let maiorPalavra;
let menorPalavra;
for(let i = 0; i < array.length;i++){
    if(array[i].length>maior){
        maior = array[i].length;
        maiorPalavra = array[i];
    }else if(array[i].length<menor){
        menorPalavra = array[i]
        menor = array[i].length;
    }
}

console.log("A maior palavra é:",maiorPalavra,"e a menor é:",menorPalavra)