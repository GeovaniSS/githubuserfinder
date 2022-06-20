export const showEmptyMessage = (msg, parent) => {
  const emptyMessage = document.createElement('h1')
  emptyMessage.classList.add('error')
  emptyMessage.innerText = msg
  
  parent.appendChild(emptyMessage)
}