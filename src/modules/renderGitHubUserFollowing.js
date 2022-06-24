import { fetchGitHubUser } from "./fetchGitHubUser"

const followingContainer = document.querySelector('.following')

export const renderGitHubUserFollowing = async(gitHubUserFollowing) => {
  const followingPromises = gitHubUserFollowing.map(({ login }) => fetchGitHubUser(login))
  const following = await Promise.all(followingPromises)
  const followingTemplate = following.reduce((acc, following) => {
  const { avatar_url, name, login } = following

    return acc + `
    <div class="follow">
      <img src="${avatar_url}" class="following-photo" alt="Foto do perfil Github">

      <div class="following-content">
        <h2 id="name">${!name ? login : name}</h2>
        <p id="login">@${login}</p>
      </div>
    </div>
    `
  }, '')

  followingContainer.innerHTML += followingTemplate
}