import gitHubApi from '../services/gitHubApi'
// const getGitHubUserReposUrl = user => `https://api.github.com/users/${user}/repos`

export const fetchGitHubUserRepos = async(user) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/repos`)
    const gitHubUserRepos = gitHubResponse.data
    return gitHubUserRepos
  } catch(e) {
    return false
  }
}