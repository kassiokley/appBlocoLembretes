let  listElement = document.querySelector('#app ul');
let  inputElement = document.querySelector('#app input');
let  buttonElement = document.querySelector('#app button');

let lembretes = JSON.parse(localStorage.getItem('lista_lembretes')) || [];

function renderLembretes() {

  listElement.innerHTML = '';

  for(lembrete of lembretes) {
    let lembreteElemento = document.createElement('li');
    let lembreteTextos = document.createTextNode(lembrete);

    let linkElement = document.createElement('a');

    linkElement.setAttribute('href', '#');

    let lembretePosicao = lembretes.indexOf(lembrete)
    linkElement.setAttribute('onclick', 'removeLembrete('+ lembretePosicao +')');

    let linkTexto = document.createTextNode('Excluir Lembrete');
    
    linkElement.appendChild(linkTexto);

    lembreteElemento.appendChild(lembreteTextos);
    lembreteElemento.appendChild(linkElement);

    listElement.appendChild(lembreteElemento);
  }
}

renderLembretes();

function addLembretes() {
  let lembreteTexto = inputElement.value;
  lembretes.push(lembreteTexto);
  inputElement.value = '';
  renderLembretes();
  salvarHistorico();
}

buttonElement.onclick = addLembretes;

function removeLembrete(lembrete) {
  lembretes.splice(lembrete, 1);
  renderLembretes();
  salvarHistorico();
}

function salvarHistorico() {
  localStorage.setItem('lista_lembretes', JSON.stringify(lembretes));
}