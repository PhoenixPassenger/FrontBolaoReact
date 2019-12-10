import axios from 'axios'
export const createHints = hints => {
    return axios
      .post('/hints/registerHint',{
        values : hints
      })
      .then(response => {
        return response.data
      })
  }