// const getGitHubUserRepos = user => `https://api.github.com/repos/${user}` 

export const fetchGitHubUserRepos = async(url) => {
  try {
    const gitHubResponse = await axios(url)
    const gitHubUserRepos = gitHubResponse.data
  
    console.log(gitHubUserRepos)
  } catch(e) {
    console.log(e)
  }
}