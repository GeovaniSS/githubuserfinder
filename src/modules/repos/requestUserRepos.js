import gitHubApi from '../../services/gitHubApi'

const requestUserRepos = async(user, page) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/repos?&per_page=5&page=${page}`)
    const gitHubUserRepos = gitHubResponse.data
    return gitHubUserRepos
  } catch(e) {
    return null
  }
}

export default requestUserRepos