import * as React from 'react';
import { Component } from 'react';

export interface ResultProps {
    
}
 
export interface ResultState {
    
}
 
class result extends Component<ResultProps, ResultState> {
    constructor(props: ResultProps) {
        super(props);
        this.state = { score : null  };
    }
    render() { 
        return ( <div>Mon resultat</div> );
    }
}
 
export default result;