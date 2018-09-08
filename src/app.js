import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import TopMenu from './components/top-menu';
import logo from './logo.svg';
import './app.css';
import MenuDishes from './shared/menu-dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuDishes: MenuDishes

    }

  }//const

  render() {
    

    return (
      <div className='col-xs-12'>
        <div className="app">
            <header className="app-header">
              <Navbar light color='primary'>
                <div className='container'>
                  <NavbarBrand href='/'>Good Food Good Mood</NavbarBrand>
                  <img src={logo} className="app-logo" alt="logo" />
                </div>
              </Navbar>
            </header>
            <div className='sub-header'>
              <div className='container'>
                <div className='main'>
                <h1 className="app-title">Casa Bonita</h1>
                  <p className="app-intro">
                    Like your food Nasty? Lots of Sauces, Meats, and Pasta, Private tables, Cable TV, Games, Vodka and Beer? Then we're the place for you. No White Wine served here under any circumstances.
                  </p>
                </div>
               

                <section className='dishes'>
                <TopMenu menuDishes={this.state.menuDishes} />
                </section>


             
              </div>
            </div>
        </div>
      </div>
    );
  }// render


}// App class

export default App;
