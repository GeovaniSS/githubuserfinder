const axios = require('axios')

const getGitHubUserFollowersUrl = user => `https://api.github.com/users/${user}/followers`

export const fetchGitHubUserFollowers = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserFollowersUrl(user))
    const gitHubUserFollowers = gitHubResponse.data
    return gitHubUserFollowers
  } catch(e) {
    return false
  }
}