import * as React from 'react';
import { Component } from 'react';
import { withRouter } from 'next/router';

export interface ResultProps {
    router: any
}
 
export interface ResultState {
    score: any
    
}
 
class Result extends Component<ResultProps, ResultState> {
    constructor(props: ResultProps) {
        super(props);
        this.state = { 
            score : props.router.query.score
        };
        console.log(props.router.query.score);
        
    }
    async componentDidMount() {
        console.log(this.state.score);
        
      }
    render() { 
        return ( <div>Mon resultat</div> );
    }
}
 
export default withRouter(Result);