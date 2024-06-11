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
