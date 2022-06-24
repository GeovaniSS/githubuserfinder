import '../assets/css/repos.css'
import { fetchGitHubUserRepos } from "./fetchGitHubUserRepos"
import { renderGitHubUserRepos } from './renderGitHubUserRepos'
import { showEmptyMessage } from './showEmptyMessage'

const profileCard = document.querySelector('.profile-card')
let page = 1

export const searchGitHubUserRepos = async(user) => {
  user = user || localStorage.getItem('user')
  
  const gitHubUserRepos = await fetchGitHubUserRepos(user, page)

  if(!gitHubUserRepos || !gitHubUserRepos.length && page === 1) 
    return showEmptyMessage('This profile has 0 repositories', document.querySelector('.repos'))
  
  renderGitHubUserRepos(gitHubUserRepos)
}

const getNextRepos = () => {
  page++
  searchGitHubUserRepos()
}

const infiniteScroll = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target
  const isCardBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

  if(isCardBottomAlmostReached) getNextRepos()
}

profileCard.addEventListener('scroll', (e) => infiniteScroll(e))

