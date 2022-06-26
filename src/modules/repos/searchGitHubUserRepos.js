import '../../assets/css/repos.css'
import requestUserRepos from "./requestUserRepos"
import addReposIntoCard from './addReposIntoCard'
import showEmptyMessage from '../../utils/showEmptyMessage'

const reposContainer = document.querySelector('.repos')
const profileCard = document.querySelector('.profile-card')

let page = 1

export const searchGitHubUserRepos = async(user) => {
  user = user || localStorage.getItem('user')
  
  const userRepos = await requestUserRepos(user, page)
  const userHasNoRepos = !userRepos || !userRepos.length && page === 1
  
  if(userHasNoRepos) 
    return showEmptyMessage('This profile has 0 repositories', reposContainer)
  
  addReposIntoCard(userRepos)
}

const getNextUserRepos = () => {
  page++
  searchGitHubUserRepos()
}

const handleScrollToCardBottom = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target
  const isCardBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

  if(isCardBottomAlmostReached) getNextUserRepos()
}

profileCard.addEventListener('scroll', handleScrollToCardBottom)