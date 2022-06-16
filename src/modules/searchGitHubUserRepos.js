import '../assets/css/repos.css'
import { fetchGitHubUserRepos } from "./fetchGitHubUserRepos"
import { renderGitHubUserRepos } from './renderGitHubUserRepos'

export const searchGitHubUserRepos = async(user) => {
  const gitHubUserRepos = await fetchGitHubUserRepos(user)

  if(!gitHubUserRepos) return
  
  renderGitHubUserRepos(gitHubUserRepos)
}

