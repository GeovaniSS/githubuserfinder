import { fetchGitHubUser } from "./fetchGitHubUser"

const followersResult = document.querySelector('.followers')

export const renderGitHubUserFollowers = async(gitHubUserFollowers) => {
  const followersPromises = gitHubUserFollowers.map(({ login }) => fetchGitHubUser(login))
  const followersArray = await Promise.all(followersPromises)
  const followers = followersArray.reduce((acc, follower) => {
    const { avatar_url, html_url, name, login } = follower 

    return acc + `
    <div class="follower">
      <img src="${avatar_url}" class="follower-photo" alt="Foto do perfil Github">
  
      <div class="follower-content">
        <h2 id="name">${name === null ? login : name}</h2>
        <p id="login">@${login}</p>
      </div>
    </div>
    `
  }, '')

  followersResult.innerHTML = followers
}