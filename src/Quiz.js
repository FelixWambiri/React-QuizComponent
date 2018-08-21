import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            quizPosition:1,
        }
    }
    render(){
        return(
            <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quizPosition -1]}/>
            </div>
        )
    }

}
export default Quiz;