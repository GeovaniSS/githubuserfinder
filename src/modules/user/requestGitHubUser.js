import gitHubApi from '../../services/gitHubApi'

const requestGitHubUser = async(user) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}`)   
    const gitHubUser = gitHubResponse.data
    return gitHubUser
  } catch(e) {
    return null
  }
}

export default requestGitHubUser