import '../assets/css/followers.css'
import { fetchGitHubUserFollowers } from "./fetchGitHubUserFollowers";
import { renderGitHubUserFollowers } from './renderGitHubUserFollowers'
import { showEmptyMessage } from './showEmptyMessage'

const profileCard = document.querySelector('.profile-card')
let page = 1

export const searchGitHubUserFollowers = async(user) => {
  user = user || localStorage.getItem('user')

  const gitHubUserFollowers = await fetchGitHubUserFollowers(user, page)

  if(!gitHubUserFollowers || !gitHubUserFollowers.length && page === 1) 
    return showEmptyMessage('This profile has 0 followers', document.querySelector('.followers'))

  renderGitHubUserFollowers(gitHubUserFollowers)
}

const getNextFollowers = () => {
  page++
  searchGitHubUserFollowers()
}

const infiniteScroll = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target
  const isCardBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

  if(isCardBottomAlmostReached) getNextFollowers()
}

profileCard.addEventListener('scroll', (e) => infiniteScroll(e))
