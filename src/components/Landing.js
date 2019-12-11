import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import jwt_decode from 'jwt-decode'
class Landing extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      nickname: '',
      email: '',
      type: false ,
      errors: {}
    }
  }

  componentDidMount() {
    if(localStorage.usertoken){
      const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.name,
      nickname: decoded.nickname,
      email: decoded.email,
      type : decoded.isAdmin
    })
    }
    
  }
type(){
  if (this.state.type) {
   return <td>Admin</td>
  }else{
  return  <td>Normal</td>
  }
}
checkLog(){
  if (this.state.type) {
      return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
          <div class="badge badge-dark text-wrap"><h1>Welcome to betdown.me</h1></div>
          <ReactPlayer url='https://www.youtube.com/watch?v=yaKeFoNOneg' playing volume={'0.2'} loop height={`640px`} width={`600px`}/>
          </div>      
        </div>      
      </div>
      )
  }else{
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
          <div class="badge badge-dark text-wrap"><h1>Welcome to betdown.me</h1></div>
          <ReactPlayer url='https://www.youtube.com/watch?v=hHW1oY26kxQ' playing volume={'0.2'} loop height={`620px`} width={`600px`}/>
          </div>      
        </div>      
      </div>
    )
  }
}
  render() {
    return(
      <div>{this.checkLog()}</div>
      )
  }
}

export default Landing
