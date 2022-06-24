import gitHubApi from '../services/gitHubApi'

export const fetchGitHubUserFollowing = async(user, page) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/following?&per_page=5&page=${page}`)
    const gitHubUserFollowing = gitHubResponse.data
    return gitHubUserFollowing
  } catch(e) {
    return false
  }
}