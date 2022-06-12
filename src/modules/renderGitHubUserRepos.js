const reposResult = document.querySelector('.repos')

export const renderGitHubUserRepos = gitHubUserRepos => {
  const repos = gitHubUserRepos.reduce((acc, repo) => {
    const { name, description, html_url, stargazers_count } = repo
    return acc + ` 
    <div class="repo">
      <div class="repo-info">
        <a href="${html_url}"> <h2 id="repos-name">${name}</h2> </a>
        <p id="repos-description">${description === null ? 'No description' : description}</p>
      </div>

      <div class="repo-star">
        <div class="star">
          <span class="material-icons-outlined">star</span>
          <span id="total-stars">${stargazers_count}</span>
        </div>
      </div>
    </div>
    `
  }, '')

  reposResult.innerHTML = repos
}