import React, { Component } from 'react'
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
              <h1 className="text-center">Bolao</h1>
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={require("./../imgs/wp4959346.jpg")} alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={require("./../imgs/wp4959346.jpg")} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={require("./../imgs/wp4959346.jpg")} alt="Third slide"/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            </div>
      )
  }else{
    return (
      <div className="container">
            <h1 className="text-center">Olá</h1>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={require("./../imgs/wp4959346.jpg")} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={require("./../imgs/wp4959346.jpg")} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={require("./../imgs/wp4959346.jpg")} alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
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
