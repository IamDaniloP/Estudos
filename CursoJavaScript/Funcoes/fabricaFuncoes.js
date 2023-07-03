function criaObjeto (nome, idade, peso) {
    return {nome, idade, fala: function (assunto) {
        return `${this.nome} com idade ${this.idade} e peso ${this.peso} está falando sobre ${assunto}}`
    }, peso}  
}

const p = criaObjeto('Danilo Pereira', 18, 80);
console.log(p.fala('o Mundo'));

// o this serve para referenciar algum atributo do objeto. utilizando o exemplo acima, vemos que todos os atributos foram declarados 
//antes do método do atributo fala. Por isso, mesmo que não possuisse o this, ainda funcionaria. Porém, caso existisse outro atributo 
// depois do atributo fala, só seria possível acessá - lo através do this já que ele falaria para o JS o seguinte: esse valor aqui se
// refere ao mesmo valor do atributo peso.

// o this se refere a constante p. Ou seja, todos os valores passados por ela, ficam armazenados no this.

// a palavra get faz com que a função passe a ser um atributo quando for chamado. Todo getter pode ser um atributo.
// nunca um setter poderá ser uma atributo, pois ele sempre necessitará de um argumento.

//Código professor!!!!

// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
      nome,
      sobrenome,
  
      // Getter
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
  
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      },
  
      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
      },
  
      altura: a,
      peso: p,
  
      // Getter
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
  const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
  const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);
  
  console.log(p1.imc);
  console.log(p2.imc);
  console.log(p3.imc);
  
