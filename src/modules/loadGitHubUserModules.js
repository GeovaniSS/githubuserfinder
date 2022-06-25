import searchGitHubUser from './user/searchGitHubUser';

const user = localStorage.getItem('user')

searchGitHubUser(user || 'octocat')

export default async() => {
  const url = location.href

  if(url.includes('index.html')) { 
    const { default: gitHubUserEvents } = await import('./user/gitHubUserEvents')
    gitHubUserEvents()
  }

  if(url.includes('repos.html')) {
    const { searchGitHubUserRepos } = await import('./repos/searchGitHubUserRepos')
    searchGitHubUserRepos(user)
  }

  if(url.includes('followers.html')) {
    const { searchGitHubUserFollowers } = await import('./followers/searchGitHubUserFollowers')
    searchGitHubUserFollowers(user)
  }

  if(url.includes('following.html')) {
    const { searchGitHubUserFollowing } = await import('./following/searchGitHubUserFollowing')
    searchGitHubUserFollowing(user)
  }
}