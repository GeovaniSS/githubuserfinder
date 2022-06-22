import gitHubApi from '../services/gitHubApi'

// ?&per_page=100
// const getGitHubUserFollowersUrl = user => `https://api.github.com/users/${user}/followers`

export const fetchGitHubUserFollowers = async(user) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/followers?&per_page=100`)
    const gitHubUserFollowers = gitHubResponse.data
    return gitHubUserFollowers
  } catch(e) {
    return false
  }
}