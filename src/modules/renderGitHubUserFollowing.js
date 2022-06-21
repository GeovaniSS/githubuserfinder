import { fetchGitHubUser } from "./fetchGitHubUser"

const followingResult = document.querySelector('.following')

export const renderGitHubUserFollowing = async(gitHubUserFollowing) => {
  const followingPromises = gitHubUserFollowing.map(({ login }) => fetchGitHubUser(login))
  const followingArray = await Promise.all(followingPromises)
  const following = followingArray.reduce((acc, following) => {
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

  followingResult.innerHTML = following
}