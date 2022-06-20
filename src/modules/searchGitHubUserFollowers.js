import '../assets/css/followers.css'
import { fetchGitHubUserFollowers } from "./fetchGitHubUserFollowers";
import { renderGitHubUserFollowers } from './renderGitHubUserFollowers'
import { showEmptyMessage } from './showEmptyMessage'

export const searchGitHubUserFollowers = async(user) => {
  const gitHubUserFollowers = await fetchGitHubUserFollowers(user)

  if(!gitHubUserFollowers || !gitHubUserFollowers.length) 
    return showEmptyMessage('This profile has 0 followers', document.querySelector('.followers'))

  renderGitHubUserFollowers(gitHubUserFollowers)
}