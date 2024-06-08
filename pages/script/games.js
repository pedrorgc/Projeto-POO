class Game{
    constructor(nome,preco,console){
        this.nome = nome;
        this.preco = preco;
        this.console = console;
    }

    getNome(){
        return this.nome;
    }
    setNome(novoNome){
        this.nome = novoNome;
    }

    getPreco(){
        return this.preco;
    }
    setPreco(novoPreco){
        this.preco = novoPreco;
    }

    getConsole(){
        return this.console;
    }
    setConsole(novoConsole){
        this.console = novoConsole;
    }
    
}