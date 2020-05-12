import * as React from "react";
import { Component } from 'react';
import Link from 'next/link'

export interface QuizProps {
    
}
 
export interface QuizState {
    
}
 
class Quiz extends Component<QuizProps, QuizState> {
    constructor(props: QuizProps) {
        super(props);
        this.state = { quiz : null  };
    }
    render() { 
        return ( <div>
                  <div>mon quiz avec les questions</div>
                  <Link href="result"><a>Page suivante</a></Link>
                 </div>  );
    }
}
 
export default Quiz;