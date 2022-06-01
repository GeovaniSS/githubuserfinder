import { renderGitHubUser } from './renderGitHubUser';

const getGitHubUserUrl = user => `https://api.github.com/users/${user}`

export const fetchGitHubUser = async(user) => {
  try {
    const gitHubResponse = await axios(getGitHubUserUrl(user))  
    const gitHubUser = gitHubResponse.data
    renderGitHubUser(gitHubUser)
  } catch(e) {
    alert('Usuário não encontrado')
    // renderPageWithoutResults()
  }
}