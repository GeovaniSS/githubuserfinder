const getGitHubApiUrl = user => `https://api.github.com/users/${user}`

const fetchGitHubUser = async(user) => {
  const gitHubResponse = await axios(getGitHubApiUrl(user))
  const gitHubUser = gitHubResponse.data

  renderUserInfo(gitHubUser)
}

const renderUserInfo = gitHubUser => {
  const name = document.querySelector('#name')
  name.innerText = gitHubUser.name

  const login = document.querySelector('#login')
  login.innerText = gitHubUser.login

  const bio = document.querySelector('#bio')
  bio.innerText = gitHubUser.bio

  const repos = document.querySelector('#repos')
  repos.innerText = gitHubUser.public_repos

  const followers = document.querySelector('#followers')
  followers.innerText = gitHubUser.followers

  const following = document.querySelector('#following')
  following.innerText = gitHubUser.following

  const blog = document.querySelector('#blog')
  blog.innerText = 'GeovaniSS'

  const company = document.querySelector('#company')
  company.innerText = 'No Company'

  const location = document.querySelector('#location')
  location.innerText = gitHubUser.location

  const twitter = document.querySelector('#twitter')
  twitter.innerText = 'No Twitter'
}

fetchGitHubUser('GeovaniSS')