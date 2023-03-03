// Variaveis e tipos

var nomeDaVariavel = 1; // Pouco usada, apenas escopo global
let nomeDaVariavel2 = 10; // Mais usada, escopo léxico
const nomeDaConstante = 'Valor Fixo'; // Ideal para programação funcional

const numero = 10;
// coisas aconteceram
const numeroNovo = 20;

let texto = "Texto";
texto = 40;
texto = true;

// Operadores

// igualdade    ==      diferença   !=
// maior    >   maior ou igual  >=
// menor    <   menor ou igual  <=
// E &&     OU ||       NÃO !

// Negativo da negação !!

// exatidão

const valor = 300;

console.log(!!valor); 
//Resultado: true
console.log(!valor); 
//Resultado: false

const outroValor = "300";

console.log(valor === 300);
// Resultado: true
console.log(outroValor === 300);
// Resultado: false
console.log(outroValor == 300);
// Resultado: true
console.log("" == false);
// Resultado: true

const condicao = false;  
const outraCondicao = true;  

// Controle de Fluxo
if (condicao) {
    // Bloco verdadeiro
} else if (outraCondicao) {
    // Bloco outra condição
} else {
    // Bloco caso contrário
}

// Ternário
const valorRecebido = condicao ? "Valor x" : "Valor y";
console.log(valorRecebido);

// For
for(let i=0; i <= 10; i++) {
    // Bloco da repetição
}

// forEach, forIn, forOf, map, filter, reduce...

// Funções

function nomeDaFuncao(valor) {
    console.log(valor);
}

const outraFuncao0 = () => console.log(); // 0 parametros
const outraFuncao1 = valor => console.log(valor); // 1 parametro
const outraFuncao01 = (valor) => console.log(valor); // 1 parametro
const outraFuncao2 = (valor, outro) => console.log(valor); // 2 ou + parametros

nomeDaFuncao(valorRecebido);
//outraFuncao(valorRecebido);
outraFuncao1(valorRecebido);

// Array
let meuArray = [];
meuArray = [10, 'a', 'nome', true, 185.54, [10, '11', 5], 'brasil', ""];

console.log(meuArray);
console.log(meuArray[5]);

console.log('----- Arrays Modificados -----');
// Tira o primeiro valor
const primeiroValor = meuArray.shift(); 
console.log(meuArray);

// Adiciona o valor a primeira posição
meuArray.unshift('Novo'); 
// É diferente da atribuição comum
// meuArray[0] = 'Novo';
console.log(meuArray);

// Tira o ultimo valor do array
const ultimoValor = meuArray.pop();
console.log(meuArray);

// Adiciona o valor a ultima posição
meuArray.push('Outro');
console.log(meuArray);

// Adicionar o valor em qualquer posição do array
meuArray.splice(-2, 0, 'Adicionei');
console.log(meuArray);

// Objetos
let meuObjeto = {};

meuObjeto = {
    nome: 'Carlos',
    idade: 12,
    genero: 'M',
    estadoCivil: 2,
    filhos: false,
    andar: () => console.log('Andando...'),
    falar() {
        console.log('Falando...');
    },
    meuArray,
    endereco: {
        rua: 'Rua Brasil',
        numero: '12',
        bairro: 'Centro',
        cidade: 'São Vicente',
        estado: 'SP',
    }
}

// Lendo objetos

console.log(meuObjeto.nome);
meuObjeto.falar();
console.log(meuObjeto.endereco);
console.log(meuObjeto.endereco.estado);


// Array de objetos

const arrayDeObjetos = [];

arrayDeObjetos.push({
    nome: 'Luana',
    sobrenome: 'Bras',
    idade: 23
});

arrayDeObjetos.push({
    nome: 'Caique',
    sobrenome: 'Noronha',
    idade: 29
});

console.log(arrayDeObjetos);

// forEach, forOf, map, filter, reduce...

const arrayEach = [10, 20, 30, 40, 100];

arrayEach.forEach(numero => console.log(numero + 10));

for (let valor of arrayEach) {
    console.log(valor);
}

arrayDeObjetos.map((obj, key) => {
    console.log(`${key}: ${obj.nome}`);
})

const resultadoMap = arrayDeObjetos.map(obj => obj.nome); // Retornar tudo!
console.log(resultadoMap);

const resultadoFilter = arrayDeObjetos.filter(obj => obj.idade > 25); // Retorna 0, 1, varios ou tudo!
console.log(resultadoFilter);

const resultadoReduce = arrayDeObjetos.reduce((acumulador, obj) => {
    acumulador += obj.idade;
    return acumulador;
}, 0); // Retornar 1
console.log(`Média das idades: ${resultadoReduce/2}`);