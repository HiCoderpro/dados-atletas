class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }calculaCategoria(){
        //calcular a categoria do atleta
    }calculaIMC(){
        //para calcular o IMC do atleta
    }calculaMediaValida(){
        //calcular a média válida do atleta
    }obtemNomeAtleta(){
        //retorna o nome do atleta
    }obtemIdadeAtleta(){
        //retorna a idade do atleta
    }obtemPesoAtleta(){
        //retorna o peso do atleta
    }obtemNotasAtleta(){
        //retorna as notas do atleta
    }obtemCategoria(){
        //retorna a categoria do atleta
    }obtemMediaValida(){
        //retorna a média válida do atleta
    }
}

//dados do Atleta nome: idade: peso: altura: notas:
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
