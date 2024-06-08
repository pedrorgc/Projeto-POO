class Usuario{
    constructor(nome,email,usuario,senha){
        this.nome = nome;
        this.email = email;
        this.usuario = usuario;
        this.senha = senha;
    }
    
    getNome(){
        return this.nome;
    }
    setNome(novoNome){
        this.nome = novoNome;
    }

    getEmail(){
        return this.email;
    }
    setEmail(novoEmail){
        this.email = novoEmail;
    }

    getUsuario(){
        return this.usuario;
    }
    setUsuario(novoUsuario){
        this.usuario = novoUsuario;
    }

    getSenha(){
        return this.senha;
    }
    setSenha(novoSenha){
        this.senha = novoSenha;
    }
}