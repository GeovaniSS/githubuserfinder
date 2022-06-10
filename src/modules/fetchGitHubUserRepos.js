import { renderGitHubUserRepos } from './renderGitHubUserRepos'

const axios = require('axios')

const getGitHubUserReposUrl = user => `https://api.github.com/users/${user}/repos`

export const fetchGitHubUserRepos = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserReposUrl(user))
    const gitHubUserRepos = gitHubResponse.data
    renderGitHubUserRepos(gitHubUserRepos)
  } catch(e) {
    console.log(e)
  }
}