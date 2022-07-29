import logo from '../logo.svg';
import './App.css';
import React, { Component } from 'react';
import { robots } from '../robots';
import CardList from '../components/CardList';
import { SearchBox } from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

import 'tachyons'


// smart component // component which is vaving the state of the our complete project 
class App extends Component {    // class bas ecomponents
  constructor() {
    super();
    this.state = {
      robots: robots,   // we are injectin the data dynamically from server when page is loaded then data inserted to our web and cards will display 
      searchfield: ''
    }
  }

  // fetch() is window object function which is use to make restfull calls to the server 
  // componentDidMount(){
  //   fetch('http://jsonplaceholder.typicode.com/users').then(Response=> Response.json())
  //   .then(users => this.setState({robots : users }));
  // }


  onsearchchange = (event) => {  // always use lambda expression so that when we call this then it should be pointing to the current class object 
    // console.log(event.target.value);
    this.setState({ searchfield : event.target.value }); // inbuild method in the jsx which change the actual filed of state object it is same as setter method who change the value of object field 
  }
// scroll is parent component of CardList component
  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(!this.state.robots.length ){
      return <h1> Loading ........</h1>
    }
    else {

      return (
        <div className='tc'>
          <h1 className='tc ma0 pa3 f3'>K-ten Friends</h1>
          <SearchBox searchChange={this.onsearchchange} />
          <Scroll>
            {/* checking that  our page produce any any error or not if error produce then render something if not then render child */}
            <ErrorBoundry>   
                <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}


export default App; // whenever we are creating the components then that file should be Export so that other file can import it 




const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const arr = array.filter((user) => {
      
     return user.team === "red";

});

console.log(array);
