document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('loginUsuario').value;
    const senha = document.getElementById('loginSenha').value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers.find(user => user.usuario === usuario && user.senha === senha);

    if (user) {
        alert('Login bem-sucedido!');
        location.href = 'index2.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});