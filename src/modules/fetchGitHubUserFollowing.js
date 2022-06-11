const axios = require('axios')

const getGitHubUserFollowingUrl = user => `https://api.github.com/users/${user}/following`

export const fetchGitHubUserFollowing = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserFollowingUrl(user))
    const gitHubUserFollowing = gitHubResponse.data
    return gitHubUserFollowing
  } catch(e) {
    return false
  }
}