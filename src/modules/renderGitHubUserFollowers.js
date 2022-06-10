const followersResult = document.querySelector('.followers')

export const renderGitHubUserFollowers = gitHubUserFollowers => {
  const followers = gitHubUserFollowers.reduce((acc, follower) => {
    const { avatar_url, html_url, login, url } = follower 
    
    return acc + `
    <div class="follower">
      <a href="${html_url}"><img src="${avatar_url}" class="follower-photo" alt="Foto do perfil Github"></a>

      <div class="follower-content">
        <h2 id="name">${login}</h2>
      </div>
    </div>
    `
    // <h2 id="name">${fetchGitHubUser(url)}</h2>
  }, '')

  followersResult.innerHTML = followers
}