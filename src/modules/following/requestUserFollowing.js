import gitHubApi from '../../services/gitHubApi'

const requestUserFollowing = async(user, page) => {
  try {
    const gitHubResponse = await gitHubApi(`${user}/following?&per_page=5&page=${page}`)
    const userFollowing = gitHubResponse.data
    return userFollowing
  } catch(e) {
    return null
  }
}

export default requestUserFollowing