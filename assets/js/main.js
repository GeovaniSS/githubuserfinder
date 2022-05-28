const userSearch = document.querySelector('#user-search')
const btnSearch = document.querySelector('.button-search')

const getGitHubUserApi = user => `https://api.github.com/users/${user}`

const fetchGitHubUser = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserApi(user))  
    const gitHubUser = gitHubResponse.data
  
    renderGitHubUser(gitHubUser)
  } catch(e) {
    alert('Usuário não encontrado')
    // renderPageWithoutResults()
  }
}

const renderGitHubUser = gitHubUser => {
  const { avatar_url, name, login, bio, public_repos, followers, following, blog, company, twitter_username, location } = gitHubUser

  document.querySelector('.profile-photo').src = avatar_url
  document.querySelector('#name').innerText = name
  document.querySelector('#login').innerText = login
  document.querySelector('#bio').innerText = bio
  document.querySelector('#repos').innerText = public_repos
  document.querySelector('#followers').innerText = followers
  document.querySelector('#following').innerText = following
  document.querySelector('#blog').innerText = blog === null ? 'No Blog': 'GeovaniSS'
  document.querySelector('#company').innerText = company === null ? 'No Company': company 
  document.querySelector('#location').innerText = location === null ? 'No Location': location
  document.querySelector('#twitter').innerText = twitter_username === null ? 'No Twitter': twitter
}

fetchGitHubUser('GeovaniSS')

btnSearch.addEventListener('click', () => fetchGitHubUser(userSearch.value) )
userSearch.addEventListener('keypress', (e) => {
  if(e.keyCode === 13) fetchGitHubUser(userSearch.value)
})