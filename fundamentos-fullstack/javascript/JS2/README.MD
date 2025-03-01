## JS 2

Aula 1 - Estrutura de Dados 21/02/2025 - Teórica

Anotações: 

Oque é? Modo de armazenar e organizar dados para que sejam usados eficientemente.

Estruturas Clássicas
Lista ligada- Cada elemento aponta pro proximo
Array - Coleção onde os elementos são identificados por um indice
Fila(Primeiro a entrar é o primeiro a sair "QUEUE")
Pilha(Ultimo a Entrar é o Primeiro a Sair "STACK")
Arvore (Conjunto de elementos(nós/nodes) organizados em estrutura hierárquica "TREE")

Estrutura de Dados no JS

Listas(Arrays)
Dicionários(Objetos)

Valor e Referencia 

Tipos de dados primitivos como Number, String Etc são copiados por valor 
Objeos como Arrays, Funções e Objetos são copiados por referencia


Aula 2 - Arrays 24/02/2025 - Teórica

- O que é? 

Estrutura pra se trabalhar com todo tipo de lista
Tem elementos identificados por um indice inteiro começando por 0 

O que dá pra fazer com arrays?

- Pode armazenar qualquer tipo de dado e ter qualquer tamanho
- Podemos utilizar os conceitos como pilha fila,  etc com os arrays.

Sintaxe: 

Criar: const frutas = ['Banana', 'Maçã']
Exibir: console.log(frutas) // resultado - (2) ['Banana', 'Maçã']
Exibir pelo indice: console.log(frutas[1]) // reusltado - ['Maçã']


Aula 8 - Objetos 28/02/2025 - Teórica

O que é? 

Estrutura para se trabalhar com dicionários chave-valor
Chave e valor em um objeto é chamdo de prioridade
diferente de array o objeto não tem sequencia
uma propriedade pode ter diferentes tipos de dados como chave(bool, string e number)
também pode armazenar qualquer tipo de dado como valor
Sintaxe:

Criar: const pessoa = {nome: 'João', idade: 20}

as propriedades e funções podem ser referenciadas por encademaento usando ponto ou colchetes

exemplos:
pessoa.nome //resultado - 'João'
pessoa['nome'] //resultado - 'João'


