let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maior = 0;
let impar = 0;
let menor = numbers[0];
//Imprima todos os valores
for(let i = 0;i<numbers.length;i+=1) {
    console.log(numbers[i]);
}

//Some todos os valores
for(let i = 0;i<numbers.length;i+=1) {
 soma+=numbers[i];
}

console.log("Soma de todos os valores: ", soma);

//Média Aritmética
media = soma / numbers.length;

console.log("Media: ",media)

//Valor maior ou menor ou igual a 20

if(media > 20 ){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20")
}

//Qual o maior número
for(let i = 0;i <numbers.length;i+=1) {
    if(numbers[i]>maior){
        maior = numbers[i];
    }
}

console.log("O maior número é: ", maior);

//Quantos valores impares? Tem algum? 
for(let i = 0; i<numbers.length;i+=1){
    if(numbers[i] % 2 !== 0){
        impar++;
    }
}
if(impar>0){
    console.log("Existem",impar,"números ímpares no array")
}else{
    console.log("nenhum valor ímpar encontrado");
}

//O menor valor
for(let i = 0; i < numbers.length;i+=1){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}

console.log("O menor valor é:", menor)
//Crie um array que vá de 1 até 25 
let arr = [];
for(let i = 0;i < 25;i+=1){
    arr[i] = i+1;
}
console.log(arr);