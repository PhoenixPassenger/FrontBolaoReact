import axios from 'axios'
export const getTeam = teams => {
    return axios
      .get('/teams/all')
      .then(response => {
        return response.data
      })
  }