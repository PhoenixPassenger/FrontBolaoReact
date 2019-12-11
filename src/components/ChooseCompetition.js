import React, { Component }  from 'react';
import { GetRoundsName, checkName } from './RoundFunctions'
import { checkHint } from './HintFunctions'
import Select from 'react-select';
import jwt_decode from 'jwt-decode'

class ChooseComp extends Component{
    constructor(){
        super();
        this.state= {
            dados:[],
            isLoading: true,
            selected: null
        }
        
    }

async send(){
    localStorage.setItem('optionChoosed', this.state.selected)
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    console.log(localStorage.optionChoosed)
    if(!decoded.isAdmin){
      await checkHint(localStorage.optionChoosed).then(resp => {
        console.warn(resp)
        if(resp === 0){
          this.props.history.push('/sort') 
         }else{
           this.props.history.push('/ranking')
         }
   
       })
    }else{
      await checkName(localStorage.optionChoosed).then(resp => {
        console.warn(resp)
        if(resp){
          this.props.history.push('/roundcreated') 
         }else{
           this.props.history.push('/round')
         }
   
       })
    }
    
}
handleChange = selectedOption => {
    this.setState({ selected : selectedOption.value });
    console.log(`Option selected:`, selectedOption.value);
    };

getRounds(){
    GetRoundsName().then(resp => {
        this.setState({
            dados: resp
        })
        let array = []
        this.state.dados.forEach(element => {
            array.push(element[`competitionName`])
        });
        this.setState({
            dados : array,
            isLoading: false
        })
    })
}
componentWillMount(){
    this.getRounds()
}
render(){
    const { selectedOption } = this.state;
    const options = []
    this.state.dados.forEach(element => {
        options.push({ value: element, label: element })
    });
    const btnStyle = {
        float: 'right'
      };
    return(
<div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
           <div className = 'jumbotron'>
    {this.state.dados && !this.state.isLoading &&
<div><Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /></div>
    }
       <button style={btnStyle} type="button" class="btn btn-outline-success"  data-toggle="modal" data-target="#exampleModal">
       BET
   </button>
   </div> 
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">See the chosen round</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" > 
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure about that?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.send.bind(this)}>See round</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</div>
    )
};
}
export default ChooseComp