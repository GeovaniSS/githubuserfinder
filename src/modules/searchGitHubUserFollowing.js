import '../assets/css/following.css'
import { fetchGitHubUserFollowing } from "./fetchGitHubUserFollowing";
import { renderGitHubUserFollowing } from "./renderGitHubUserFollowing";
import { showEmptyMessage } from './showEmptyMessage'

export const searchGitHubUserFollowing = async(user) => {
  const gitHubUserFollowing = await fetchGitHubUserFollowing(user)

  if(!gitHubUserFollowing || !gitHubUserFollowing.length) 
    return showEmptyMessage('This profile follows 0 users', document.querySelector('.following'))

  renderGitHubUserFollowing(gitHubUserFollowing)
}