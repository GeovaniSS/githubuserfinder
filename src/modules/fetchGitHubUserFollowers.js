import gitHubApi from '../services/gitHubApi'

export const fetchGitHubUserFollowers = async(user, page) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/followers?&per_page=5&page=${page}`)
    const gitHubUserFollowers = gitHubResponse.data
    return gitHubUserFollowers
  } catch(e) {
    return false
  }
}