import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            quizPosition:1,
        }
    }
    render(){
        const isQuizEnd = this.state.quizPosition -1 === quizData.quiz_questions.length
        console.log('The answer is', isQuizEnd)
        return(
            <div>
                { isQuizEnd ? <QuizEnd/> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quizPosition -1]}/>}
            </div>
        )
    }

}
export default Quiz;