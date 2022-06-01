const getGitHubUserRepos = user => `https://api.github.com/repos/${user}` 

export const fetchGitHubUserRepos = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserRepos(user))
    const gitHubUserRepos = gitHubResponse.data
  
    console.log(gitHubUserRepos)
  } catch(e) {
    console.log(e)
  }
}