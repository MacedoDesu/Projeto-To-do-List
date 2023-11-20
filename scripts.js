const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhalistaDeItens = []

function adicionaNovaTarefa(){
    minhalistaDeItens.push({tarefa: input.value,concluida: false,})
    
    input.value = ''

    mostraTarefas()
}

function mostraTarefas(){
    let novali = ''

    minhalistaDeItens.forEach((item, index) =>{
        novali = novali + `

        <li class="task ${item.concluida && 'done'}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="apagar-tarefa" onclick="deletarItem(${index})">
        </li>
        `
    })

    listaCompleta.innerHTML = novali

    localStorage.setItem('lista', JSON.stringify(minhalistaDeItens))

}

function concluirTarefa(index){
    minhalistaDeItens[index].concluida = !minhalistaDeItens[index].concluida

    mostraTarefas()

}

function deletarItem(index){
    minhalistaDeItens.splice(index, 1)

    mostraTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
        minhalistaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    

    mostraTarefas()
}


recarregarTarefas()
button.addEventListener('click', adicionaNovaTarefa)