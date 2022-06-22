import gitHubApi from '../services/gitHubApi'

export const fetchGitHubUser = async(user) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}`)   
    const gitHubUser = gitHubResponse.data
    return gitHubUser
  } catch(e) {
    return false
  }
}