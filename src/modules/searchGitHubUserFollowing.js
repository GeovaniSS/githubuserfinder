import '../assets/css/following.css'
import { fetchGitHubUserFollowing } from "./fetchGitHubUserFollowing";
import { renderGitHubUserFollowing } from "./renderGitHubUserFollowing";

export const searchGitHubUserFollowing = async(user) => {
  const gitHubUserFollowing = await fetchGitHubUserFollowing(user)

  if(!gitHubUserFollowing) return

  renderGitHubUserFollowing(gitHubUserFollowing)
}