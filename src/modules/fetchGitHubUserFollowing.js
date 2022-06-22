import gitHubApi from '../services/gitHubApi'

// const getGitHubUserFollowingUrl = user => `https://api.github.com/users/${user}/following`

export const fetchGitHubUserFollowing = async(user) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/following`)
    const gitHubUserFollowing = gitHubResponse.data
    return gitHubUserFollowing
  } catch(e) {
    return false
  }
}