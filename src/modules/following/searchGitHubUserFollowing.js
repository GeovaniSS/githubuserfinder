import '../../assets/css/following.css'
import requestUserFollowing from "./requestUserFollowing";
import addFollowsIntoProfileCard from "./addFollowsIntoProfileCard";
import showEmptyMessage from '../../utils/showEmptyMessage'

const followingContainer = document.querySelector('.following')
const profileCard = document.querySelector('.profile-card')

let page = 1

export const searchGitHubUserFollowing = async(user) => {
  user = user || localStorage.getItem('user')

  const gitHubUserFollowing = await requestUserFollowing(user, page)
  const userNoFollowAnyone = !gitHubUserFollowing || !gitHubUserFollowing.length && page === 1

  if(userNoFollowAnyone) 
    return showEmptyMessage('This profile follows 0 users', followingContainer)

  addFollowsIntoProfileCard(gitHubUserFollowing)
}

const getNextFollowing = () => {
  page++
  searchGitHubUserFollowing()
}

const handleScrollToCardBottom = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target
  const isCardBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

  if(isCardBottomAlmostReached) getNextFollowing()
}

profileCard.addEventListener('scroll', handleScrollToCardBottom)
