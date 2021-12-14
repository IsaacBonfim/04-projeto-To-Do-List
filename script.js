const tarefa = document.getElementById('texto-tarefa');
const botaoAddTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

function addTarefa() {
  const itemLista = document.createElement('li');
  const item = tarefa.value;

  itemLista.textContent = item;
  tarefa.value = '';

  listaTarefa.appendChild(itemLista);
}

botaoAddTarefa.addEventListener('click', addTarefa);
