const axios = require('axios')

export const fetchGitHubUserRepos = async(reposUrl) => {
  try {
    const gitHubResponse = await axios(reposUrl)
    const gitHubUserRepos = gitHubResponse.data
  
    console.log(gitHubUserRepos)
  } catch(e) {
    console.log(e)
  }
}