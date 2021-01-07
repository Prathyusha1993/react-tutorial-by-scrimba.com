//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import JokePunch from './components/jokepunch';
import jokesData from './components/jokesData'

function AppJokeData () {
    const jokeComponent = jokesData.map(joke => {
        return <JokePunch key={joke.id} question={joke.question} punchline={joke.punchline} />
      })
    return(
      <div>
        {jokeComponent}
      </div>
    );
}

export default AppJokeData;
