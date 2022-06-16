import '../assets/css/responsive.css'
import { searchGitHubUser } from './searchGitHubUser'

const userSearch = document.querySelector('#user-search')
const btnSearch = document.querySelector('.button-search')
const errorMessage = document.querySelector('#no-results')

export default () => {
  btnSearch.addEventListener('click', () => searchGitHubUser(userSearch.value))
  userSearch.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) searchGitHubUser(userSearch.value)
  })
  userSearch.addEventListener('change', () => errorMessage.style.display = 'none')
}