import '../assets/css/following.css'
import { fetchGitHubUserFollowing } from "./fetchGitHubUserFollowing";
import { renderGitHubUserFollowing } from "./renderGitHubUserFollowing";
import { showEmptyMessage } from './showEmptyMessage'

const profileCard = document.querySelector('.profile-card')
let page = 1

export const searchGitHubUserFollowing = async(user) => {
  user = user || localStorage.getItem('user')

  const gitHubUserFollowing = await fetchGitHubUserFollowing(user, page)

  if(!gitHubUserFollowing || !gitHubUserFollowing.length && page === 1) 
    return showEmptyMessage('This profile follows 0 users', document.querySelector('.following'))

  renderGitHubUserFollowing(gitHubUserFollowing)
}

const getNextFollowing = () => {
  page++
  searchGitHubUserFollowing()
}

const infiniteScroll = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target
  const isCardBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

  if(isCardBottomAlmostReached) getNextFollowing()
}

profileCard.addEventListener('scroll', (e) => infiniteScroll(e))
