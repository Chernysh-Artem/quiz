import React from 'react';
import './App.css';
import Header from ".components/Header.js"
import Question from './quiz/Question';
import Answer from './quiz/Answer';
import Button from './components/Button';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Question questionText="Question must be taken from file"/> 
        <Answer answerText="Text must be taken from file" />
        <Answer answerText="Text must be taken from file"/>
        <Answer answerText="Text must be taken from file"/>
        <Button/>
      </div>
    );
}}

export default App;
