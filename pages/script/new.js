class Game {
  constructor(produto, plataforma, quantidade, valor) {
      this.produto = produto;
      this.plataforma = plataforma;
      this.quantidade = quantidade;
      this.valor = valor;
  }

  getProduto() {
      return this.produto;
  }

  setProduto(novoProduto) {
      this.produto = novoProduto;
  }

  getPlataforma() {
      return this.plataforma;
  }

  setPlataforma(novaPlataforma) {
      this.plataforma = novaPlataforma;
  }

  getQuantidade() {
      return this.quantidade;
  }

  setQuantidade(novaQuantidade) {
      this.quantidade = novaQuantidade;
  }

  getValor() {
      return this.valor;
  }

  setValor(novoValor) {
      this.valor = novoValor;
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
          modal.classList.remove('active');
          document.getElementById('registerProdForm').reset();
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
  const quantidade = document.getElementById('quantidade').value;
  const valor = document.getElementById('valor').value;

  const newGame = new Game(produto, plataforma, quantidade, valor);

  if (currentProductIndex !== null) {
      products[currentProductIndex] = newGame;
  } else {
      products.push(newGame);
  }

  localStorage.setItem('products', JSON.stringify(products));
  loadProducts();
  closeModal();
}

function loadProducts() {
  const productsList = document.getElementById('productsList');
  productsList.innerHTML = '';

  if (products.length === 0) {
      const listItem = document.createElement('li');
      listItem.textContent = 'Nenhum produto cadastrado.';
      productsList.appendChild(listItem);
  } else {
      products.forEach((product, index) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `Produto: ${product.produto}, Plataforma: ${product.plataforma}, Quantidade: ${product.quantidade}, Valor: R$${product.valor} 
              <button onclick="openModal(true, ${index})">Editar</button>
              <button onclick="deleteProduct(${index})">Excluir</button>`;
          productsList.appendChild(listItem);
      });
  }
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  loadProducts();
}
