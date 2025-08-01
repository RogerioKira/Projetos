function adicionarTarefa(){
    let valorInput = document.querySelector('input').value

    let li = document.createElement("li")
    li.innerHTML = valorInput + '<span onclick="deletarTarefa(this)">X</span>'

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value = ''

}

function deletarTarefa(li){
    li.parentElement.remove()
}