class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas

    }calculaIMC(){

        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(14); // <-- Retorna o IMC com 14 casas decimais

    }  obterNotasOrdenadas() {

        return this.notas.slice().sort((a, b) => a - b);

    }obterNotasValidas() {
        const notasOrdenadas = this.obterNotasOrdenadas();
        return notasOrdenadas.slice(1, 4);
    c
    }calculaMediaValida(){
        //Faz o calculo da media valida 
        const notasValidas = this.obterNotasValidas();
        return notasValidas.reduce((soma, nota) => soma + nota, 0) / notasValidas.length;

    }obtemNomeAtleta(){
        //retorna nome do atleta
        return this.nome

    }obtemIdadeAtleta(){
        //retorna a idade do atleta
        return this.idade

    }obtemPesoAtleta(){
        //retorna o peso do atleta
        return this.peso

    }obtemNotasAtleta(){
        //retorna as notas do atleta
        return this.notas

    }obterAlturaAtleta(){
        
        //retorna a Altura do atleta
        return this.altura

    }obtemCategoria(){
        if(this.idade >= 9 && this.idade <= 11 ){
            return "Infantil"
        }else if(this.idade >= 12 && this.idade <= 13 ){
            return "Juvenil"
        }else if(this.idade >= 14 && this.idade <= 15 ){
            return "Intermediario"
        }else if(this.idade >= 16 && this.idade <= 30 ){
            return "Adulto"
        }else if(this.idade >= 30){
            return "Sem categoria"
        }

    }
}

//dados do Atleta nome: idade: peso: altura: notas:
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88])



const primeiroAtleta = atleta
// Exibindo informações do atleta
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obterAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.calculaIMC()}`);
console.log(`Média válida: ${atleta.calculaMediaValida()}`);