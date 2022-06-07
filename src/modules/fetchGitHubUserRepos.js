import { renderGitHubUserRepos } from './renderGitHubUserRepos'

const axios = require('axios')

export const fetchGitHubUserRepos = async(reposUrl) => {
  try {
    const gitHubResponse = await axios(reposUrl)
    const gitHubUserRepos = gitHubResponse.data

    renderGitHubUserRepos(gitHubUserRepos)
  } catch(e) {
    console.log(e)
  }
}