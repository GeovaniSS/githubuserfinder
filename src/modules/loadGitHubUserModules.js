import { searchGitHubUser } from './searchGitHubUser';

const user = localStorage.getItem('user')

searchGitHubUser(user || 'GeovaniSS')

export default async() => {
  if(location.pathname === '/public/index.html') { 
    const { default: gitHubUserEvents } = await import('./searchGitHubUser')
    gitHubUserEvents()
  }

  if(location.pathname === '/public/pages/repos.html') {
    const { searchGitHubUserRepos } = await import('./searchGitHubUserRepos')
    searchGitHubUserRepos(user)
  }

  if(location.pathname === '/public/pages/followers.html') {
    const { searchGitHubUserFollowers } = await import('./searchGitHubUserFollowers')
    searchGitHubUserFollowers(user)
  }

  if(location.pathname === '/public/pages/following.html') {
    const { searchGitHubUserFollowing } = await import('./searchGitHubUserFollowing')
    searchGitHubUserFollowing(user)
  }
}