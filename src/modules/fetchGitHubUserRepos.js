import gitHubApi from '../services/gitHubApi'

export const fetchGitHubUserRepos = async(user, page) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/repos?&per_page=5&page=${page}`)
    const gitHubUserRepos = gitHubResponse.data
    return gitHubUserRepos
  } catch(e) {
    return false
  }
}