const reposContainer = document.querySelector('.repos')

const generateReposTemplate = repos => repos.reduce((acc, repo) => {
    const { name, description, html_url, stargazers_count } = repo
    return acc + ` 
    <div class="repo">
      <div class="repo-info">
        <a href="${html_url}" target="_blank">
          <h2 id="repos-name">${name}</h2> 
        </a>
        <p id="repo-description">${!description ? 'No description' : description}</p>
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

const addReposIntoProfileCard = gitHubUserRepos => {
  const reposTemplate = generateReposTemplate(gitHubUserRepos)
  reposContainer.innerHTML += reposTemplate
}

export default addReposIntoProfileCard