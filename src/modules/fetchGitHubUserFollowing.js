import { renderGitHubUserFollowers } from './renderGitHubUserFollowers'

const axios = require('axios')

const getGitHubUserFollowingUrl = user => `https://api.github.com/users/${user}/following`

export const fetchGitHubUserFollowing = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserFollowingUrl(user))
    const gitHubUserFollowing = gitHubResponse.data
    renderGitHubUserFollowers(gitHubUserFollowing)
  } catch(e) {
    console.log(e)
  }
}