import React, { Component }  from 'react';
import { Rankings } from './HintFunctions'
class Ranking extends Component{
    constructor(){
        super();
        this.state= {
            isLoading: true,
            RankingA: [],
            RankingB: []
        }
        
    }  

compareScore(a, b) {
        const rankinA = a.score;
        const rankinB = b.score;
      
        // let comparison = 0;
        // if (bandA > bandB) {
        //   comparison = 1;
        // } else if (bandA < bandB) {
        //   comparison = -1;
        // }
        return rankinA - rankinB;
      }
compareHits(a, b) {
    const rankinA = a.hits;
    const rankinB = b.hits;
    return  rankinB - rankinA;
}

  async GetRanking(){
    Rankings(localStorage.optionChoosed).then(resp => {
        let vet = []
        let rankinA = []
        let rankinB = []
        resp.forEach(element => {
            let temp = {
                nickname: [],
                hits:[],
                score:[]
            }
            temp.nickname = (element.user.nickname)
            temp.hits = (element.hits)
            temp.score = (element.score)
            vet.push(temp)
        });
        
        rankinA = vet.slice().sort(this.compareScore)
        rankinB = vet.slice().sort(this.compareHits)
        console.log(rankinA, rankinB)
        this.setState({
            RankingA : rankinA,
            RankingB: rankinB,
            isLoading: false
        })

    })
}
            

 componentDidMount(){
    this.GetRanking()
}

generateRankingA(){
    let resp = []
    this.state.RankingA.forEach(element => {
    resp.push(<li>{element.nickname} with {element.hits} hits</li>)
    });
    console.log(resp)
    return resp
}

generateRankingB(){
    let resp = []
    this.state.RankingB.forEach(element => {
        resp.push(<li>{element.nickname} with {element.score} points of proximity</li>)
    });
    console.log(resp)
    return resp
}


render(){  
    return (
    <div className="container">
    <div className="jumbotron mt-10">
    <div className="row-sm-8 mx-auto">
        <h1 className="text-center">Ranking</h1>
            <div className="col-sm-8 mx-auto" >
                <h4>Ranking by hits</h4>
                {this.state && !this.state.isLoading &&
                <ol>{this.generateRankingA()}</ol>
            }
            </div>
            <div className="col-sm-8 mx-auto" >
                <h4>Ranking by proximity</h4>
                {this.state && !this.state.isLoading &&
                <ol>{this.generateRankingB()}</ol>
            }
            </div>
    </div>
    </div>
    </div>
    
    );
};
}
export default Ranking