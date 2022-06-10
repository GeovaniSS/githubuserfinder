import { fetchGitHubUser } from './fetchGitHubUser';
fetchGitHubUser(localStorage.getItem('user') || 'GeovaniSS')

const userSearch = document.querySelector('#user-search')
const btnSearch = document.querySelector('.button-search')

const repos = document.querySelector('.profile-repos')
const followers = document.querySelector('.profile-followers')
const following = document.querySelector('.profile-following')

export default () => {
  btnSearch.addEventListener('click', () => { 
    fetchGitHubUser(userSearch.value)
    localStorage.setItem('user', userSearch.value)
  })

  userSearch.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) fetchGitHubUser(userSearch.value)
    localStorage.setItem('user', userSearch.value)
  })

  userSearch.addEventListener('change', () => document.querySelector('#no-results').style.display = 'none')
  
  repos.addEventListener('click', () => location.assign(location.origin + '/public/pages/repos.html'))
  followers.addEventListener('click', () => location.assign(location.origin + '/public/pages/followers.html'))
  following.addEventListener('click', () => location.assign(location.origin + '/public/pages/following.html')) 
}

const loadUserReposData = () => {
  if(location.pathname === '/public/pages/repos.html') {
    import('./fetchGitHubUserRepos')
      .then(({ fetchGitHubUserRepos }) => fetchGitHubUserRepos(localStorage.getItem('user')))
      .catch(e => console.log(e))
  }
}

const loadUserFollowersData = () => {
  if(location.pathname === '/public/pages/followers.html') {
    import('./fetchGitHubUserFollowers')
    .then(({ fetchGitHubUserFollowers }) => fetchGitHubUserFollowers(localStorage.getItem('user')))
    .catch(e => console.log(e))
  }
}

const loadUserFollowingData = () => {
  if(location.pathname === '/public/pages/following.html') {
    import('./fetchGitHubUserFollowing')
      .then(({ fetchGitHubUserFollowing }) => fetchGitHubUserFollowing(localStorage.getItem('user')))
      .catch(e => console.log(e))
  }
}

loadUserReposData()
loadUserFollowersData()
loadUserFollowingData()