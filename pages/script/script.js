function logar(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == "admin" && senha === "admin"){
        location.href = "index2.html"
    } else{
        document.getElementById('alerta').innerText = 'Usuário ou senha incorretos'
    }
}