const tarefa = document.getElementById('texto-tarefa');
const botaoAddTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const botaoRmvTarefa = document.getElementById('apaga-tudo');
const removeFinalizados = document.getElementById('remover-finalizados');
const saveList = document.getElementById('salvar-tarefas');

function limpaBg() {
  const itens = document.querySelectorAll('li');

  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.background = 'rgba(240 , 247 , 244 , 1)';
  }
}

function mudaBg(evento) {
  const item = evento.target;

  if (item.style.backgroundColor === 'rgb(128, 128, 128)') {
    item.style.backgroundColor = 'rgba(240 , 247 , 244 , 1)';
  } else {
    limpaBg();
    item.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function marcaTarefa(evento) {
  const item = evento.target;

  if (item.className === 'completed') {
    item.className = '';
  } else {
    item.className = 'completed';
  }
}

function addTarefa() {
  const itemLista = document.createElement('li');
  const item = tarefa.value;

  itemLista.textContent = item;
  itemLista.addEventListener('click', mudaBg);
  itemLista.addEventListener('dblclick', marcaTarefa);
  tarefa.value = '';

  listaTarefa.appendChild(itemLista);
}

botaoAddTarefa.addEventListener('click', addTarefa);

function removeTarefas() {
  const itens = document.querySelectorAll('li');
  const aux = itens.length - 1;

  for (let i = 0; i <= aux; i += 1) {
    listaTarefa.removeChild(itens[i]);
  }
}

botaoRmvTarefa.addEventListener('click', removeTarefas);

function removeCompletos() {
  const itens = document.querySelectorAll('li');
  const aux = itens.length - 1;

  for (let i = 0; i <= aux; i += 1) {
    if (itens[i].className === 'completed') {
      listaTarefa.removeChild(itens[i]);
    }
  }
}

removeFinalizados.addEventListener('click', removeCompletos);

function salvaLista() {
  const lista = document.querySelector('ol');
  const itens = document.querySelectorAll('li');
  const aux = [];

  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].className === 'completed') {
      aux.push(true);
    } else {
      aux.push(false);
    }
  }

  localStorage.setItem('itens', JSON.stringify(lista.innerText));
  localStorage.setItem('class', JSON.stringify(aux));
}

saveList.addEventListener('click', salvaLista);

function remontaLista(array1, array2) {
  for (let i = 0; i < array1.length; i += 1) {
    const itemLista = document.createElement('li');

    itemLista.textContent = array1[i];
    itemLista.addEventListener('click', mudaBg);
    itemLista.addEventListener('dblclick', marcaTarefa);

    if (array2[i] === true) {
      itemLista.className = 'completed';
    }
    listaTarefa.appendChild(itemLista);
  }
}

function carregaLista() {
  if (localStorage.getItem('itens') !== null) {
    const aux = JSON.parse(localStorage.getItem('itens'));
    const itens = aux.split('\n');
    const classe = JSON.parse(localStorage.getItem('class'));

    remontaLista(itens, classe);
  }
}

window.onload = carregaLista;
