import '../../assets/css/followers.css'
import requestUserFollowers from "./requestUserFollowers";
import addFollowersIntoCard from './addFollowersIntoCard'
import showEmptyMessage from '../../utils/showEmptyMessage'

const followersContainer = document.querySelector('.followers')
const profileCard = document.querySelector('.profile-card')

let page = 1

export const searchGitHubUserFollowers = async(user) => {
  user = user || localStorage.getItem('user')

  const userFollowers = await requestUserFollowers(user, page)
  const userHasNoFollowers = !userFollowers || !userFollowers.length && page === 1

  if(userHasNoFollowers) 
    return showEmptyMessage('This profile has 0 followers', followersContainer)

  addFollowersIntoCard(userFollowers)
}

const getNextUserFollowers = () => {
  page++
  searchGitHubUserFollowers()
}

const handleScrollToCardBottom = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target
  const isCardBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

  if(isCardBottomAlmostReached) getNextUserFollowers()
}

profileCard.addEventListener('scroll', handleScrollToCardBottom)