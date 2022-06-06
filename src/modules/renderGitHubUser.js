export let reposUrl
export let followersUrl
export let followingUrl

export const renderGitHubUser = gitHubUser => {
  const { avatar_url, name, login, bio, public_repos, followers, 
  following, blog, company, twitter_username, location, repos_url, 
  followers_url, following_url} = gitHubUser

  reposUrl = repos_url
  followersUrl = followers_url
  followingUrl = following_url.slice(0, following_url.indexOf('{')) //Gambiarra
  
  document.querySelector('.profile-photo').src = avatar_url
  document.querySelector('#name').innerText = name === null ? login : name
  document.querySelector('#login').innerText = `@${login.toLowerCase()}`
  document.querySelector('#bio').innerText = bio === null ? 'This profile has no bio': bio
  document.querySelector('#repos').innerText = public_repos
  document.querySelector('#followers').innerText = followers
  document.querySelector('#following').innerText = following
  document.querySelector('#blog').innerText = blog === null ? 'No Blog': 'GeovaniSS'
  document.querySelector('#company').innerText = company === null ? 'No Company': company 
  document.querySelector('#location').innerText = location === null ? 'No Location': location
  document.querySelector('#twitter').innerText = twitter_username === null ? 'No Twitter': twitter_username
}
