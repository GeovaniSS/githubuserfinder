const showEmptyMessage = (msg, container) => {
  const emptyMessage = document.createElement('h1')
  emptyMessage.classList.add('error')
  emptyMessage.innerText = msg
  
  container.appendChild(emptyMessage)
}

export default showEmptyMessage