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

  export const checkHint = check => {
    return axios
      .post('/hints/allByName',{
        competitionName : check
      },{headers : {"x-access-token": localStorage.getItem("usertoken")}})
      .then(response => {
        return response.data
      })
  }

  export const Calculate = check => {
    return axios
      .post('/scores/calculate',{
        competitionName : check
      },{headers : {"x-access-token": localStorage.getItem("usertoken")}})
      .then(response => {
        return response.data
      })
  }

  export const Rankings = check => {
    return axios
      .post('/scores/rankings',{
        competitionName : check
      })
      .then(response => {
        return response.data
      })
  }