import React, { Component }  from 'react';
import { getRoundByName } from './RoundFunctions'
class RoundCreated extends Component{
    constructor(){
        super();
        this.state= {
            dados:[],
            isLoading: true,
            items:[],
            objetos: []
        }
        
    }  

  async GetTeams(){
    getRoundByName(localStorage.optionChoosed).then(a => {
         let rer = []
         a.forEach(element => {
        // eslint-disable-next-line
         rer.push(<li><img src={element.team.img}/> <text>{element.team.name}</text></li>)   
         });
         this.setState({
             objetos: rer,
             isLoading : false
         })
     })
}

 componentDidMount(){
    this.GetTeams()
}




render(){
    const divStyle = {
        margin: '40px',
        align: 'center'
      };
    
    return (
    <div className="container">
    <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto" style={divStyle}> 
        <h1 className="text-center">Results</h1>
        </div>
            <div className="col-sm-8 mx-auto">
            {this.state.dados && this.state && !this.state.isLoading &&
                <ol>{this.state.objetos}</ol>
            }
                </div >
        <div> 
            <br/>
        </div>
    </div>
    </div>
    
    );
};
}
export default RoundCreated