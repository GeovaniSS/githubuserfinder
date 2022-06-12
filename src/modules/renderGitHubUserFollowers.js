import { fetchGitHubUser } from "./fetchGitHubUser"

const followersResult = document.querySelector('.followers')

export const renderGitHubUserFollowers = async(gitHubUserFollowers) => {
  const followers = gitHubUserFollowers.map(({ login }) => fetchGitHubUser(login))
  console.log(followers)
  // const followersPromises = await Promise.all(followers)
  
  // followersPromises.reduce((acc, follower) => {
  //   const { avatar_url, html_url, name, login, bio } = follower 
    
  //   return acc + `
  //   <div class="follower">
  //     <a href="${html_url}" target="_blank"><img src="${avatar_url}" class="follower-photo" alt="Foto do perfil Github"></a>
  
  //     <div class="follower-content">
  //       <h2 id="name">${name}</h2>
  //       <p id="login">@${login}</p>
  //     </div>
  //   </div>
  //   `
  // }, '')

    // const { avatar_url, html_url, name, login, bio } = follower 
    
    // const gitHubUser = await fetchGitHubUser(login)

  // }, '')

  followersResult.innerHTML = followers
}