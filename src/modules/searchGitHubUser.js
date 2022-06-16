import { fetchGitHubUser } from './fetchGitHubUser';
import { renderGitHubUser } from './renderGitHubUser';

const showErrorMessage = () => {
  const errorMessage = document.querySelector('#no-results')
  errorMessage.style.display = 'block'
}

export const searchGitHubUser = async(user) => {
  const gitHubUser = await fetchGitHubUser(user)

  if(!gitHubUser) return showErrorMessage()

  renderGitHubUser(gitHubUser)
  localStorage.setItem('user', user)
}