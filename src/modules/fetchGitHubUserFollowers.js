const axios = require('axios')

export const fetchGitHubUserFollowers = async(url) => {
  try {
    const gitHubResponse = await axios(url)
    const gitHubUserFollowers = gitHubResponse.data
  
    console.log(gitHubUserFollowers)
  } catch(e) {
    console.log(e)
  }
}