const axios = require('axios')
require('dotenv').config()

const token = process.env.AUTH_TOKEN

const gitHubApi = axios.create({
  baseURL: "https://api.github.com/users"
})

gitHubApi.defaults.headers.authorization = `Bearer ${token}`;

export default gitHubApi