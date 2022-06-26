import requestGitHubUser  from './requestGitHubUser';
import renderGitHubUser from './renderGitHubUser';

const noResultsMsg = document.querySelector('#no-results')

const showNoResultsMsg = () => noResultsMsg.style.display = 'block'

const saveGitHubUserIntoLocalStorage = user => localStorage.setItem('user', user)

const searchGitHubUser = async(user) => {
  const gitHubUser = await requestGitHubUser(user)

  if(!gitHubUser) return showNoResultsMsg()

  renderGitHubUser(gitHubUser)
  saveGitHubUserIntoLocalStorage(user)
}

export default searchGitHubUser