import { fetchGitHubUserFollowers } from "./fetchGitHubUserFollowers";
import { renderGitHubUserFollowers } from './renderGitHubUserFollowers'

export const searchGitHubUserFollowers = async(user) => {
  const gitHubUserFollowers = await fetchGitHubUserFollowers(user)

  if(!gitHubUserFollowers) return

  renderGitHubUserFollowers(gitHubUserFollowers)
}