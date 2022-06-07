import { fetchGitHubUser } from './fetchGitHubUser';
import { fetchGitHubUserRepos } from './fetchGitHubUserRepos';
import { fetchGitHubUserFollowers } from './fetchGitHubUserFollowers';
import { fetchGitHubUserFollowing } from './fetchGitHubUserFollowing';
// import { reposUrl, followingUrl, followersUrl } from './renderGitHubUser'

const userSearch = document.querySelector('#user-search')
const btnSearch = document.querySelector('.button-search')

export default () => {
  btnSearch.addEventListener('click', () => fetchGitHubUser(userSearch.value))
  userSearch.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) fetchGitHubUser(userSearch.value)
  })
  userSearch.addEventListener('change', () => document.querySelector('#no-results').style.display = 'none')
}

fetchGitHubUser('GeovaniSS')
fetchGitHubUserRepos('https://api.github.com/users/GeovaniSS/repos')
fetchGitHubUserFollowers('https://api.github.com/users/GeovaniSS/followers')
fetchGitHubUserFollowing('https://api.github.com/users/GeovaniSS/following')