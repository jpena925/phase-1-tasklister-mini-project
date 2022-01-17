document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addToList(e.target["new-task-description"].value)
    form.reset()
  })
});


function addToList(newTask){
  let listItem = document.createElement('p')
  let itemButton = document.createElement('button')
  itemButton.addEventListener('click', deleteTask)
  listItem.textContent = `${newTask} `
  itemButton.textContent = 'x '
  listItem.appendChild(itemButton)
  document.querySelector('#tasks').appendChild(listItem)
}

function deleteTask(event){
  event.target.parentNode.remove()
}