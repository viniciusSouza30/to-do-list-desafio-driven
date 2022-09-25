$('.add-card').click(function addCard() {
  // aqui irá mostrar o ID do elemento anterior do mesmo pai do elemento clicado, que no caso é a UL
  // console.log(this.previousElementSibling.id);

  const ulId = this.previousElementSibling.id;
  const text = prompt("Qual é a tarefa?");
  const board = document.getElementById(ulId);

  // draggable - permite que eu faça movimentações com o elemento
  const templete = `
        <li id='${new Date().getTime()}' draggable="true" ondragstart="drag(event)">
            <p>${text}</p>
            <p class="remove">X</p>
        </li>
    `;
  // adicionando o template (li) na lista correspondete
    $(board).append(templete);
    $(".remove").click(function removeCard() {
        document.getElementById(this.parentElement.id).remove();
    });
});

function drag(event) {
    // é uma forma de salvar para onde estou arrastando o elemento. no caso estou salvando o ID do card que estou movimentando.
    event.dataTransfer.setData('card', event.target.id);
}

function over(event) {
    // evita o comportamento padrão do navegador
    event.preventDefault();
}

function drop(event, id) {
    // evitar comportamento padrão do navegador.
    event.preventDefault();

    const target = document.getElementById(id);
    const data = event.dataTransfer.getData('card');
    // estou pegando o elemento agora de acordo com o ID que data trouxe
    const card = document.getElementById(data);
    // adiciona o elemento depois dos elementos já existentes
    target.appendChild(card);
    event.dataTransfer.clearData();
}

