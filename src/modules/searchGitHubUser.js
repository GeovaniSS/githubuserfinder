import { fetchGitHubUser } from './fetchGitHubUser';
import { renderGitHubUser } from './renderGitHubUser';

const userSearch = document.querySelector('#user-search')
const btnSearch = document.querySelector('.button-search')
const errorMessage = document.querySelector('#no-results')

const showErrorMessage = () => {
  if(!errorMessage) return
  errorMessage.style.display = 'block'
}

export const searchGitHubUser = async(user) => {
  const gitHubUser = await fetchGitHubUser(user)

  if(!gitHubUser) return showErrorMessage()

  renderGitHubUser(gitHubUser)
  localStorage.setItem('user', user)
}

export default () => {
  btnSearch.addEventListener('click', () => searchGitHubUser(userSearch.value))
  userSearch.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) searchGitHubUser(userSearch.value)
  })
  userSearch.addEventListener('change', () => errorMessage.style.display = 'none')
}