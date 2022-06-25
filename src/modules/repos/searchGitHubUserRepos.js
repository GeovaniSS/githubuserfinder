import '../../assets/css/repos.css'
import requestUserRepos from "./requestUserRepos"
import addReposIntoProfileCard from './addReposIntoProfileCard'
import showEmptyMessage from '../../utils/showEmptyMessage'

const reposContainer = document.querySelector('.repos')
const profileCard = document.querySelector('.profile-card')

let page = 1

export const searchGitHubUserRepos = async(user) => {
  user = user || localStorage.getItem('user')
  
  const gitHubUserRepos = await requestUserRepos(user, page)
  const userHasNoRepos = !gitHubUserRepos || !gitHubUserRepos.length && page === 1
  
  if(userHasNoRepos) 
    return showEmptyMessage('This profile has 0 repositories', reposContainer)
  
  addReposIntoProfileCard(gitHubUserRepos)
}

const getNextRepos = () => {
  page++
  searchGitHubUserRepos()
}

const handleScrollToCardBottom = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target
  const isCardBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

  if(isCardBottomAlmostReached) getNextRepos()
}

profileCard.addEventListener('scroll', handleScrollToCardBottom)