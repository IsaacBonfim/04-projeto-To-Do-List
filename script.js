const tarefa = document.getElementById('texto-tarefa');
const botaoAddTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const botaoRmvTarefa = document.getElementById('apaga-tudo');
const removeFinalizados = document.getElementById('remover-finalizados');

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

function removeTarefa() {
  const itens = document.querySelectorAll('li');
  const aux = itens.length - 1;

  for (let i = 0; i <= aux; i += 1) {
    listaTarefa.removeChild(itens[i]);
  }
}

botaoRmvTarefa.addEventListener('click', removeTarefa);

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
