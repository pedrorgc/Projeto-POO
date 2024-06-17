class Game {
    constructor(produto, plataforma, quantidade, valor) {
        this.produto = produto;
        this.plataforma = plataforma;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadProducts();

    document.getElementById('registerProdForm').addEventListener('submit', function(event) {
        event.preventDefault();
        saveProduct();
    });
});

const modal = document.querySelector('.modal-container');
let products = JSON.parse(localStorage.getItem('products')) || [];
let currentProductIndex = null;

function openModal(edit = false, index = 0) {
    modal.classList.add('active');

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            closeModal();
        }
    };

    if (edit) {
        const product = products[index];
        document.getElementById('produto').value = product.produto;
        document.getElementById('plataforma').value = product.plataforma;
        document.getElementById('quantidade').value = product.quantidade;
        document.getElementById('valor').value = product.valor;
        currentProductIndex = index;
    } else {
        document.getElementById('registerProdForm').reset();
        currentProductIndex = null;
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.getElementById('registerProdForm').reset();
    currentProductIndex = null;
}

function saveProduct() {
    const produto = document.getElementById('produto').value;
    const plataforma = document.getElementById('plataforma').value;
    const quantidade = parseInt(document.getElementById('quantidade').value, 10);
    const valor = document.getElementById('valor').value;

    const newGame = new Game(produto, plataforma, quantidade, valor);

    if (currentProductIndex !== null){
        products[currentProductIndex] = newGame;
        console.log(`Produto atualizado: ${JSON.stringify(newGame)}`);
    } else {
    const existingProductIndex = products.findIndex(product => 
        product.produto === produto && product.plataforma === plataforma && product.valor === valor);

        if (existingProductIndex !== -1) {
        products[existingProductIndex].quantidade = 
            parseInt(products[existingProductIndex].quantidade, 10) + quantidade;
        console.log(`Quantidade atualizada: ${products[existingProductIndex].quantidade}`);
        } else {
        products.push(newGame);
        }
    }
    
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
    closeModal();
}

function loadProducts() {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';

    if (products.length === 0) {
        const listItem = document.createElement('tr');
        listItem.innerHTML = '<td colspan="6">Nenhum Produto Cadastrado.</td>';
        productsList.appendChild(listItem);
    } else {
        products.forEach((product, index) => {
            const listItem = document.createElement('tr');
            listItem.innerHTML = `
                <td>${product.produto}</td>
                <td>${product.plataforma}</td>
                <td>${product.quantidade}</td>
                <td>R$${product.valor}</td>
                <td class="acao">
                    <button onclick="openModal(true, ${index})"><i class='bx bx-edit'></i></button>
                </td>
                <td class="acao">
                    <button onclick="deleteProduct(${index})"><i class='bx bx-trash'></i></button>
                </td>
            `;
            productsList.appendChild(listItem);
        });
    }
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
}
