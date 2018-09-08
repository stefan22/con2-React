import React, { Component } from 'react';
import './top-menu.css';


class TopMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }

    console.log('Menu Component Constructor called');

  }// const

  //testing lifecycle comp method
  componentDidMount() {
    console.log('menu component DidMount invoked'); 
  }


  onSelectedDish(dish) {
    console.log('dish id: ', dish.id);
    this.setState({
      selectedDish: dish
    });
    
  
  }// selectedDish

  renderSelected(dish) {
    if (dish !== null) {
      return (
        <div className='col-xs-12'>
          <div className='container'>
            <section className='is-dish-selected'>
              <figure>
                <div className='innertop'>
                  <h3>{dish.title}</h3>
                  <img src={dish.image} alt={dish.title} />
                </div>
                <div className='inner'>
                  <p>Id: {dish.id}</p>
                  <p>Label: {dish.label}</p>
                  <p>Category: {dish.category}</p>
                  <p>Prize: £{dish.prize}</p>
                  <p>Waiver: {dish.release}</p>
                
                </div>
              </figure>
            </section>
          </div>
        </div>

      );

    } else {
      return (
        <div></div>
      )
    }

  }// renderSelected

  

  render() {
   
    const dishes = this.props.menuDishes.map((dish) => {
      // console.log('dish', dish);
      return (
          <div onClick={() => this.onSelectedDish(dish)} 
               className='dishlist' key={dish.id}>
               <img className='dish-img' 
                    src={dish.image} alt={dish.title} />
            
            <ul>

              <li>Dish:
                    <span className='dish-data'>{dish.title}</span>
              </li>
              <li>Label:
                    <span className='dish-data'>{dish.label}</span>
              </li>
              <li>Category:
                    <span className='dish-data'>{dish.category}</span>

              </li>
              <li>Prize: £
                    <span className='dish-data'>{dish.prize}</span>

              </li>
              <li>Disclaimer:
                    <span className='dish-data'>{dish.release}</span>
              </li>
            </ul>
          </div>
      );

    });

    //testing lifecycle comp method
    console.log('Menu comp Render method is called');
  


    return (
        <section> 
          <div className='col-xs-12'>
            <h3>React's trying to kill the For Loop.</h3>
                {dishes}
          <hr/>
          <br/>
          {this.renderSelected(this.state.selectedDish)}
          </div>
        </section>

    );


  }// render

}// TopMenu class


export default TopMenu;