class Game{
    constructor(produto, plataforma, quantidade, valor){
        this.produto = produto;
        this.plataforma = plataforma;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    
    getProduto(){
        return this.produto;
    }

    setProduto(novoProduto){
        this.produto = novoProduto;
    }

    getPlataforma(){
        return this.plataforma;
    }

    setPlataforma(novaPlataforma){
        this.plataforma = novaPlataforma;
    }

    getQuantidade(){
        return this.quantidade;
    }

    setQuantidade(novaQuantidade){
        this.quantidade = novaQuantidade;
    }

    getValor(){
        return this.valor;
    }

    setValor(novoValor){
        this.valor = novoValor;
    }
}

document.addEventListener('DOMContentLoaded', function() {
   

    const products = JSON.parse(localStorage.getItem('products')) || [];

    document.getElementById('registerProdForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const produto = document.getElementById('produto').value;
        const plataforma = document.getElementById('plataforma').value;
        const quantidade = document.getElementById('quantidade').value;
        const valor = document.getElementById('valor').value;

        const newGame = new Game(produto, plataforma, quantidade, valor);
        products.push(newGame);

        localStorage.setItem('products', JSON.stringify(products));

        console.log(products);
        alert('Cadastro bem-sucedido!');

        document.getElementById('registerProdForm').reset();
    });
});