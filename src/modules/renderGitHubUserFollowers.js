import { fetchGitHubUser } from "./fetchGitHubUser"

const followersContainer = document.querySelector('.followers')

export const renderGitHubUserFollowers = async(gitHubUserFollowers) => {
  const followersPromises = gitHubUserFollowers.map(({ login }) => fetchGitHubUser(login))
  const followers = await Promise.all(followersPromises)
  const followersTemplate = followers.reduce((acc, follower) => {
    const { avatar_url, name, login } = follower 

    return acc + `
    <div class="follower">
      <img src="${avatar_url}" class="follower-photo" alt="Foto do perfil Github">
  
      <div class="follower-content">
        <h2 id="name">${!name ? login : name}</h2>
        <p id="login">@${login}</p>
      </div>
    </div>
    `
  }, '')

  followersContainer.innerHTML += followersTemplate
}