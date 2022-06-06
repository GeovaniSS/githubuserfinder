import { renderGitHubUser } from './renderGitHubUser';

const axios = require('axios')

const getGitHubUserUrl = user => `https://api.github.com/users/${user}`

export const fetchGitHubUser = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserUrl(user))  
    const gitHubUser = gitHubResponse.data
    renderGitHubUser(gitHubUser)
  } catch(e) {
    document.querySelector('#no-results').style.display = 'block'
  }
}