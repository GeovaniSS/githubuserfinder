import { renderGitHubUserFollowers } from './renderGitHubUserFollowers'

const axios = require('axios')

export const fetchGitHubUserFollowers = async(url) => {
  try {
    const gitHubResponse = await axios(url)
    const gitHubUserFollowers = gitHubResponse.data
  
    renderGitHubUserFollowers(gitHubUserFollowers)
  } catch(e) {
    console.log(e)
  }
}