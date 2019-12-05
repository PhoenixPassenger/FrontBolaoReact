import React, { Component }  from 'react';
import { GetRoundsName } from './RoundFunctions'
import Select from 'react-select';

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
    console.log(localStorage.optionChoosed)
    this.props.history.push('/sort') 
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
    <div>
    <div>
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
            <h5 class="modal-title" id="exampleModalLabel">Make a bet</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" > 
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure about that?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.send.bind(this)}>Send Bet</button>
          </div>
        </div>
      </div>
    </div>
</div>
    )
};
}
export default ChooseComp