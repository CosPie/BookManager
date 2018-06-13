import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import { Button } from 'antd';
import { Menu, Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import userProfile from './components/userProfile';
import search from './components/search';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


// import { Router, Route } from 'react-router'
class Nav extends React.Component {
  state = {
    current: 'search',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="search">
          <Link to="/"><Icon type="search" />Search</Link>
        </Menu.Item>
        <Menu.Item key="user">
          <Link to="/userProfile"><Icon type="user" />Me</Link>
        </Menu.Item>
      </Menu>

        <Route exact path="/" component={search}/>
        <Route path="/userProfile" component={userProfile}/>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Router>
          <Nav></Nav>
        </Router>


      </div>
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


export default App;
