export const renderGitHubUser = gitHubUser => {
  const { avatar_url, name, login, bio, public_repos, followers, 
  following, blog, company, twitter_username, location } = gitHubUser
  
  document.querySelector('.profile-photo').src = avatar_url
  document.querySelector('#name').innerText = !name ? login : name
  document.querySelector('#login').innerText = `@${login.toLowerCase()}`
  
  if(!document.querySelector('#bio')) return
  
  document.querySelector('#bio').innerText = !bio ? 'This profile has no bio': bio
  document.querySelector('#repos').innerText = public_repos
  document.querySelector('#followers').innerText = followers
  document.querySelector('#following').innerText = following
  document.querySelector('#blog').innerText = !blog ? 'No Blog': blog
  document.querySelector('#company').innerText = !company ? 'No Company': company 
  document.querySelector('#location').innerText = !location ? 'No Location': location
  document.querySelector('#twitter').innerText = !twitter_username ? 'No Twitter': twitter_username
}

