import searchGitHubUser from './modules/user/searchGitHubUser';

const user = localStorage.getItem('user')

searchGitHubUser(user || 'octocat')

export default async() => {
  const url = location.href

  const isIndexPage = url.includes('index.html') || !url.includes('repos') 
  && !url.includes('followers') && !url.includes('following')
  const isReposPage = url.includes('repos.html')
  const isFollowersPage = url.includes('followers.html')
  const isFollowingPage = url.includes('following.html')

  if(isIndexPage) { 
    const { default: gitHubUserEvents } = await import('./modules/user/gitHubUserEvents')
    gitHubUserEvents()
  }

  if(isReposPage) {
    const { searchGitHubUserRepos } = await import('./modules/repos/searchGitHubUserRepos')
    searchGitHubUserRepos(user)
  }

  if(isFollowersPage) {
    const { searchGitHubUserFollowers } = await import('./modules/followers/searchGitHubUserFollowers')
    searchGitHubUserFollowers(user)
  }

  if(isFollowingPage) {
    const { searchGitHubUserFollowing } = await import('./modules/following/searchGitHubUserFollowing')
    searchGitHubUserFollowing(user)
  }
}