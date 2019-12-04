import React, { Component }  from 'react';
import { generateRound } from './RoundFunctions'
class Round extends Component{
    constructor(){
        super();
        this.state= {
            roundname: ``,
            isLoading: true,
        }
        
    this.onChange = this.onChange.bind(this)
    }

    async send(){
        console.log(this.state.roundname)
        generateRound(this.state.roundname)
        this.props.history.push('/') 
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
    
render(){
    const divStyle = {
        margin: '40px',
        align: 'center'
      };
      const btnStyle = {
        float: 'right'
      };

    
    return (
    <div className="container">
    <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto" style={divStyle}> 
        <h1 className="text-center">Bet</h1>
        <p className="text-center">Generate new Round</p>
        </div>
            <div className="col-sm-8 mx-auto">
            <div className="form-group">
                <label htmlFor="name">Round Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="roundname"
                  placeholder="Enter round name"
                  value={this.state.roundname}
                  onChange={this.onChange}
                />
              </div>
                </div> 
        <div> 
            <br/>
        </div>
        <div>
              <button style={btnStyle} type="button" class="btn btn-outline-success"  data-toggle="modal" data-target="#exampleModal">
                    Generate
                </button>
                </div> 
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Generate new round</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" > 
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure about that?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.send.bind(this)}>Send round</button>
      </div>
    </div>
  </div>
</div>
  </div> 
    );
};
}
export default Round