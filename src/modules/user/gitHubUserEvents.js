import '../../assets/css/responsive.css'
import searchGitHubUser from './searchGitHubUser'

const userSearchInput = document.querySelector('#user-search')
const btnSearch = document.querySelector('.button-search')
const noResultsMsg = document.querySelector('#no-results')

const hideNoResultsMsg = () => noResultsMsg.style.display = 'none'

export default () => {
  btnSearch.addEventListener('click', () => { 
    searchGitHubUser(userSearchInput.value) 
    userSearchInput.value = ""
  })
  userSearchInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) { 
      searchGitHubUser(userSearchInput.value)
      userSearchInput.value = ""
    }
  })
  userSearchInput.addEventListener('change', () => hideNoResultsMsg())
}