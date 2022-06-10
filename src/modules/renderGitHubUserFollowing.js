const followingResult = document.querySelector('.following')

export const renderGitHubUserFollowing = gitHubUserFollowing => {
  const following = gitHubUserFollowing.reduce((acc, following) => {
    const { avatar_url, html_url, login } = following
    
    return acc + `
    <div class="following">
      <a href="${html_url}"><img src="${avatar_url}" class="following-photo" alt="Foto do perfil Github"></a>

      <div class="following-content">
        <h2 id="name">${login}</h2>
      </div>
    </div>
    `
    // <h2 id="name">Geovani Silva</h2>
  }, '')

  followingResult.innerHTML = following
}