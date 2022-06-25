import requestGitHubUser  from './requestGitHubUser';
import renderGitHubUser from './renderGitHubUser';

const showErrorMessage = () => {
  const errorMessage = document.querySelector('#no-results')
  errorMessage.style.display = 'block'
}

const searchGitHubUser = async(user) => {
  const gitHubUser = await requestGitHubUser(user)

  if(!gitHubUser) return showErrorMessage()

  renderGitHubUser(gitHubUser)
  localStorage.setItem('user', user)
}

export default searchGitHubUser