export const fetchGitHubUserFollowing = async(url) => {
  try {
    const gitHubResponse = await axios(url)
    const gitHubUserFollowing = gitHubResponse.data
  
    console.log(gitHubUserFollowing)
  } catch(e) {
    console.log(e)
  }
}