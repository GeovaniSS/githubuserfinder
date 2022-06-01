import './assets/css/style.css';
import { fetchGitHubUser } from './modules/fetchGitHubUser';
import { fetchGitHubUserRepos } from './modules/fetchGitHubUserRepos'

const userSearch = document.querySelector('#user-search')
const btnSearch = document.querySelector('.button-search')

const reposLink = document.querySelector('#repos')
const followersLink = document.querySelector('#followers')
const followingLink = document.querySelector('#following')

fetchGitHubUser('GeovaniSS')

btnSearch.addEventListener('click', () => fetchGitHubUser(userSearch.value))
userSearch.addEventListener('keypress', (e) => {
  if(e.keyCode === 13) fetchGitHubUser(userSearch.value)
})
reposLink.addEventListener('click', () => fetchGitHubUserRepos('GeovaniSS'))
