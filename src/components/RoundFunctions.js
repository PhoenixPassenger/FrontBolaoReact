import axios from 'axios'
export const generateRound  = rounds => {
    return axios
      .post('/rounds/generate',{
          compName: rounds
      })
      .then(response => {
        return response.data
      })
  }

export const getRoundByName  = rounds => {
return axios
    .get('/rounds/allByName',{
        compName: rounds
    })
    .then(response => {
    return response.data
    })
}

export const GetRoundsName  = rounds => {
return axios
    .post('/rounds/all',{
        compName: rounds
    })
    .then(response => {
    return response.data
    })
}