import React, { Component }  from 'react';
import SharedGroup from './shared-group';
import { getTeam } from './TeamFunctions'

class Sort extends Component{
    constructor(){
        super();
        this.state= {
            dados:[],
            isLoading: true
        }
        
    }
shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};
  GetTeams(){
     getTeam().then(a => {
         
         let newvet = this.shuffle(a)
         let array = []
         newvet.forEach(element => {
             array.push(element.name)
         });
         let array2 = this.shuffle(array)
         this.setState({
             dados: array2,
             isLoading: false
         })
         console.log(this.state.dados)
         return array2
     })
}

 componentWillMount(){
    this.GetTeams()
}

render(){
    
    return (
    <div className="container">
    <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
        <h1 className="text-center">Bet</h1>
        <p>Drag the team to the Hint list then push "bet" to use</p>
        </div>
        <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>{}</td>
                {this.state.dados && this.state && !this.state.isLoading &&
                <td>Aposta <SharedGroup items={this.state.dados}/></td>
                }
              </tr>
            </tbody>
          </table>
        <div> 
            <br/>
        </div>
    </div>
    </div>
    );
};
}
export default Sort