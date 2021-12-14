const tarefa = document.getElementById('texto-tarefa');
const botaoAddTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

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

function addTarefa() {
  const itemLista = document.createElement('li');
  const item = tarefa.value;

  itemLista.textContent = item;
  itemLista.addEventListener('click', mudaBg);
  tarefa.value = '';

  listaTarefa.appendChild(itemLista);
}

botaoAddTarefa.addEventListener('click', addTarefa);
