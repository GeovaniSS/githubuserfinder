export const renderGitHubUserFollowers = gitHubUserFollowers => {
  const followers = gitHubUserFollowers.reduce((acc, follower) => {
    const { avatar_url, html_url, login } = follower 
    
    return acc + `
    <div class="follower">
      <img src="${avatar_url}" class="follower-photo" alt="Foto do perfil Github">

      <div class="follower-content">
        <h2 id="name">Geovani Silva</h2>
        <p id="login">@${login.toLowerCase()}</p>
      </div>
    </div>
    `
  }, '')

  const followersResult = document.querySelector('.followers')
  followersResult.innerHTML = followers
}