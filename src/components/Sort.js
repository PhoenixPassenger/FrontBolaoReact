import React, { Component }  from 'react';
import { getTeam } from './TeamFunctions'
import uniqueId from 'lodash/uniqueId';
import Sortable from 'react-sortablejs';
import { createHints, Calculate } from './HintFunctions'
class Sort extends Component{
    constructor(){
        super();
        this.state= {
            dados:[],
            isLoading: true,
            items:[],
            objetos: []
        }
        
    }
    async send(){
        await this.setState({
            items: this.simpleList.toArray() 
        })
        let count = 1
        let hints = []
       await this.state.items.forEach(time => {
            let hint = {
                idTeam : null,
                rank : null,
                competitionName: null,
                userId: null
            }
            hint.competitionName = (localStorage.optionChoosed)
            hint.idTeam = (this.state.objetos.find(element => element.name === time ).id)
            hint.rank = count
            hint.userId = parseInt(localStorage.userId,10)
            hints.push(hint)
            count+=1
        });
        console.log(hints)
        createHints(hints).then(resp =>{
            Calculate(localStorage.optionChoosed)
        })
            
        this.props.history.push('/') 
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
     getTeam(localStorage.optionChoosed).then(a => {
         
         let newvet = this.shuffle(a)
         let array = []
         let arrayIds = []
         newvet.forEach(element => {
             array.push(element.name)
             arrayIds.push(element)
         });
         let array2 = this.shuffle(array)
         this.setState({
             dados: array2,
             objetos: arrayIds,
             isLoading: false
         })
        // console.log(this.state.objetos)
         return array2
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
      const btnStyle = {
        float: 'right'
      };
    const simpleList = this.state.dados.map((val, key) => (
        // eslint-disable-next-line
        <li key={uniqueId()} data-id={val}><img src = {this.state.objetos.find(element => element.name === val ).img}></img> {val}</li>
    ));
    
    return (
    <div className="container">
    <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto" style={divStyle}> 
        <h1 className="text-center">Bet</h1>
    <p className="text-center">Organize the way you want to, then push BET to make the hint on the {localStorage.optionChoosed} championship</p>
        </div>
            <div className="col-sm-8 mx-auto">
                {this.state.dados && this.state && !this.state.isLoading &&
            <Sortable
                options={{
                    animation: 150
                }}
                className="block-list"
                ref={c => {
                    if (c) {
                        this.simpleList = c.sortable;
                    }
                }}
                tag="ol"
            >
                {simpleList}
            </Sortable>
                }
                </div >
                <div>
              <button style={btnStyle} type="button" class="btn btn-outline-success"  data-toggle="modal" data-target="#exampleModal">
                    BET
                </button>
                </div> 
        <div> 
            <br/>
        </div>
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
    
    );
};
}
export default Sort