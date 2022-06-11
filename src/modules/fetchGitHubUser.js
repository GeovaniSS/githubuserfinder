const axios = require('axios')

const getGitHubUserUrl = user => `https://api.github.com/users/${user}`

export const fetchGitHubUser = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserUrl(user))   
    const gitHubUser = gitHubResponse.data
    return gitHubUser
  } catch(e) {
    return false
  }
}