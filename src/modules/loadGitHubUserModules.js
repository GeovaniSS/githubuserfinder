import { searchGitHubUser } from './searchGitHubUser';

const user = localStorage.getItem('user')

searchGitHubUser(user || 'octocat')

export default async() => {
  const url = location.href

  if(url.includes('index.html')) { 
    const { default: gitHubUserEvents } = await import('./gitHubUserEvents')
    gitHubUserEvents()
  }

  if(url.includes('repos.html')) {
    const { searchGitHubUserRepos } = await import('./searchGitHubUserRepos')
    searchGitHubUserRepos(user)
  }

  if(url.includes('followers.html')) {
    const { searchGitHubUserFollowers } = await import('./searchGitHubUserFollowers')
    searchGitHubUserFollowers(user)
  }

  if(url.includes('following.html')) {
    const { searchGitHubUserFollowing } = await import('./searchGitHubUserFollowing')
    searchGitHubUserFollowing(user)
  }
}