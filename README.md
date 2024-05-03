Aqui está o README para o projeto:

---

# Projeto de Cálculo de Estatísticas de Atletas

Este projeto consiste em uma aplicação simples para calcular estatísticas dos atletas, como IMC (Índice de Massa Corporal) e média das notas em uma competição, além de determinar a categoria do atleta com base na idade.

## Funcionalidades

- Cálculo do IMC do atleta com base no peso e altura.
- Cálculo da média das notas válidas do atleta (desconsiderando a maior e a menor nota).
- Determinação da categoria do atleta com base na idade.

## Como Usar

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `atleta.js` para ver o código fonte.
3. Execute o arquivo utilizando um ambiente de execução JavaScript, como Node.js.
4. Explore os métodos da classe `Atleta` e experimente diferentes funcionalidades.

## Exemplo de Uso

```javascript
// Criando instância de um atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// Exibindo informações do atleta
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obterAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.calculaIMC()}`);
console.log(`Média válida: ${atleta.calculaMediaValida()}`);
```

## Contribuição

Contribuições são bem-vindas! Se você encontrar bugs, problemas ou tiver sugestões de melhorias, por favor, abra uma issue neste repositório ou envie um pull request com suas alterações.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Sinta-se à vontade para personalizar este README de acordo com as necessidades específicas do seu projeto.