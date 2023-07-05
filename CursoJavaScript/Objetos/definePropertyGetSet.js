// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
  
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', { // é importante o método get e set para conseguir tratar os dados inseridos antes de bugar o sistema.
      enumerable: true, // mostra a chave
      configurable: true, // configurável
      get: function() {
        console.log('Passei por aqui');
        return estoquePrivado;
      },
      set: function(valor) {
        if (typeof valor !== 'number') { // serve para para tornar mais difícil o erro do usuário ao alterar a variável.
          throw new TypeError('Mensagem');
        }
  
        estoquePrivado = valor;
      }
    });
  }
  const p1 = new Produto('Camisinha', 20, 3);
  //p1.estoque = 'Iu';
  p1.estoque = 4595959;
  console.log(p1.estoque);
  
