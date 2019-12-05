import axios from 'axios'
export const getTeam = teams => {
    return axios
      .post('/teams/teamsRound',{
        competitionName : teams
      })
      .then(response => {
        return response.data
      })
  }