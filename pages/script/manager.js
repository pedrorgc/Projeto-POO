document.addEventListener('DOMContentLoaded', function(){
    displayProducts();
});

function displayProducts(){
    const productsList = document.getElementById('productsList');

    const productsListed = JSON.parse(localStorage.getItem('products')) || [];

    productsList.innerHTML = '';

    if (productsListed.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'Nenhum produto cadastrado.';
        userList.appendChild(listItem);
    } else {
        productsListed.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `Produto: ${product.produto}, Plataforma: ${product.plataforma}, Quantidade: ${product.quantidade}, Valor: R$${product.valor}`;
            productsList.appendChild(listItem);
        });
    }
}
