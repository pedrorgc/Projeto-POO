const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sProduto = document.querySelector('#m-produto');
const sPlataforma = document.querySelector('#m-plataforma');
const sQuantidade = document.querySelector('#m-quantidade');
const sValor = document.querySelector('#m-valor');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  };

  if (edit) {
    sProduto.value = itens[index].produto;
    sPlataforma.value = itens[index].plataforma;
    sQuantidade.value = itens[index].quantidade;
    sValor.value = itens[index].valor;
    id = index;
  } else {
    sProduto.value = '';
    sPlataforma.value = '';
    sQuantidade.value = '';
    sValor.value = '';
  }
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  itens.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.produto}</td>
    <td>${item.plataforma}</td>
    <td>${item.quantidade}</td>
    <td>R$ ${item.valor}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
  if (sProduto.value == '' || sPlataforma.value == '' || sQuantidade.value == '' || sValor.value == '') {
    return;
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].produto = sProduto.value;
    itens[id].plataforma = sPlataforma.value;
    itens[id].quantidade = sQuantidade.value;
    itens[id].valor = sValor.value;
  } else {
    itens.push({ produto: sProduto.value, plataforma: sPlataforma.value, quantidade: sQuantidade.value, valor: sValor.value });
  }

  setItensBD();

  modal.classList.remove('active');
  loadItens();
  id = undefined;
};

function loadItens() {
  itens = getItensBD();
  tbody.innerHTML = '';
  itens.forEach((item, index) => {
    insertItem(item, index);
  });
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? [];
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens));

loadItens();
