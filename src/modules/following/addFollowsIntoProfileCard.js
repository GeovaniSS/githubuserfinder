import requestGitHubUser from "../user/requestGitHubUser"

const followingContainer = document.querySelector('.following')

const generateFollowingPromises = following => following.map(({ login }) => requestGitHubUser(login))

const generateFollowingTemplate = following => following.reduce((acc, follow) => {
    const { avatar_url, name, login } = follow
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

const addFollowsIntoProfileCard = async(gitHubUserFollowing) => {
  const followingPromises = generateFollowingPromises(gitHubUserFollowing)
  const following = await Promise.all(followingPromises)
  const followingTemplate = generateFollowingTemplate(following)

  followingContainer.innerHTML += followingTemplate
}

export default addFollowsIntoProfileCard