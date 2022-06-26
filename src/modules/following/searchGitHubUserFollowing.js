import '../../assets/css/following.css'
import requestUserFollowing from "./requestUserFollowing";
import addFollowsIntoCard from "./addFollowsIntoCard";
import showEmptyMessage from '../../utils/showEmptyMessage'

const followingContainer = document.querySelector('.following')
const profileCard = document.querySelector('.profile-card')

let page = 1

export const searchGitHubUserFollowing = async(user) => {
  user = user || localStorage.getItem('user')

  const userFollowing = await requestUserFollowing(user, page)
  const userNoFollowAnyone = !userFollowing || !userFollowing.length && page === 1

  if(userNoFollowAnyone) 
    return showEmptyMessage('This profile follows 0 users', followingContainer)

  addFollowsIntoCard(userFollowing)
}

const getNextUserFollowing = () => {
  page++
  searchGitHubUserFollowing()
}

const handleScrollToCardBottom = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target
  const isCardBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

  if(isCardBottomAlmostReached) getNextUserFollowing()
}

profileCard.addEventListener('scroll', handleScrollToCardBottom)
