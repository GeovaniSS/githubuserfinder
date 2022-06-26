import requestGitHubUser from "../user/requestGitHubUser"

const followersContainer = document.querySelector('.followers')

const generateFollowersPromises = followers => followers.map(({ login }) => requestGitHubUser(login))

const generateFollowersTemplate = followers => followers.reduce((acc, follower) => {
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

const addFollowersIntoCard = async(userFollowers) => {
  const followersPromises = generateFollowersPromises(userFollowers)
  const followers = await Promise.all(followersPromises)
  const followersTemplate = generateFollowersTemplate(followers)

  followersContainer.innerHTML += followersTemplate
}

export default addFollowersIntoCard