//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import JokePunch from './functional-components/jokepunch';
import jokesData from './functional-components/jokesData'

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
