import '../assets/css/repos.css'
import { fetchGitHubUserRepos } from "./fetchGitHubUserRepos"
import { renderGitHubUserRepos } from './renderGitHubUserRepos'
import { showEmptyMessage } from './showEmptyMessage'

export const searchGitHubUserRepos = async(user) => {
  const gitHubUserRepos = await fetchGitHubUserRepos(user)

  if(!gitHubUserRepos || !gitHubUserRepos.length) 
    return showEmptyMessage('This profile has 0 repositories', document.querySelector('.repos'))
  
  renderGitHubUserRepos(gitHubUserRepos)
}

