const reposResult = document.querySelector('.repos')

export const renderGitHubUserRepos = gitHubUserRepos => {
  const repos = gitHubUserRepos.reduce((acc, repo) => {
    const { name, description, html_url, stargazers_count } = repo
    return acc + ` 
    <div class="repo">
      <div class="repo-info">
        <a href="${html_url}" target="_blank">
          <h2 id="repos-name">${name}</h2> 
        </a>
        <div class="repo-star">
          <div class="star">
            <span class="material-icons-outlined">star</span>
            <span id="total-stars">${stargazers_count}</span>
          </div>
        </div>
      </div>

      <p id="repo-description">${description === null ? 'No description' : description}</p>
    </div>
    `
  }, '')

  reposResult.innerHTML = repos
}