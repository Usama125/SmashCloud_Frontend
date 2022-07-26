import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://lit-cove-57081.herokuapp.com/api'
})

export default instance  