//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import FunctionalCompo from './components/functionalcompo'
import DateApp from './components/Dateapp';
import TodoItem from './components/todoitem'
import ContactCard from './components/contactcard'
import JokePunch from './components/jokepunch';
import jokesData from './components/jokesData'

class App extends Component {
  state={};

  render() {
    return(
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <br />
        <div className="contacts">
          <ContactCard 
          name="Mr.Whiskerson"
          imgUrl="http://placekitten.com/200/100"
          phone="(212) 555-12345"
          Email="whiskaz@catnap.meow" />
          <ContactCard 
          name="Fluffykins"
          imgUrl="http://placekitten.com/g/200/100"
          phone="(212) 555-12345"
          Email="fluffyme@cat.com" />
          <ContactCard 
          name="calldog"
          imimgUrlgrl="http://placekitten.com/g/230/110"
          phone=" (212) 555-12345"
          Email="calldog@dog.com" />
          <ContactCard 
          name="Destroyer"
          imgUrl="http://placekitten.com/g/200/150"
          phone="(212) 555-12345"
          Email="destroyerz@dog.com" />
        </div>
        <br />
        <hr />
        {/* <FunctionalCompo />
        <DateApp /> */}
      </div>
    );
  }
}

export default App;
