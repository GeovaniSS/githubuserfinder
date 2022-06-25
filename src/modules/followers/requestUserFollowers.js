import gitHubApi from '../../services/gitHubApi'

const requestUserFollowers = async(user, page) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/followers?&per_page=5&page=${page}`)
    const gitHubUserFollowers = gitHubResponse.data
    return gitHubUserFollowers
  } catch(e) {
    return null
  }
}

export default requestUserFollowers
