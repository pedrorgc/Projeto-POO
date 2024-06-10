document.addEventListener('DOMContentLoaded', function() {
    class User {
        constructor(nome, email, usuario, senha) {
            this.nome = nome;
            this.email = email;
            this.usuario = usuario;
            this.senha = senha;
        }

        getNome() {
            return this.nome;
        }

        setNome(novoNome) {
            this.nome = novoNome;
        }

        getEmail() {
            return this.email;
        }

        setEmail(novoEmail) {
            this.email = novoEmail;
        }

        getUsuario() {
            return this.usuario;
        }

        setUsuario(novoUsuario) {
            this.usuario = novoUsuario;
        }

        getSenha() {
            return this.senha;
        }

        setSenha(novaSenha) {
            this.senha = novaSenha;
        }
    }

    });

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Cadastro de usuário
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const usuario = document.getElementById('registerUsuario').value;
        const senha = document.getElementById('registerSenha').value;

        const newUser = new User(nome, email, usuario, senha);
        users.push(newUser);

        // Armazenar no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        console.log(users);
        alert('Cadastro bem-sucedido!');

        document.getElementById('registerForm').reset();

    });
