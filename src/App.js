import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import CATEGORIES from './categorieslist.js';
import CategoryItem from './categoryitem.js';
import Display from './display';
import './App.css';






class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = ({
            activeId: props.categories[0].id
        })
    }



    handleClick = ( id ) =>  {

        this.setState({
            activeId: id            

        }) 

    }

    render() {
         const activeCategory = this.props.categories.find(( category ) =>category.id === this.state.activeId  )

        return (
          <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <div className="App-menu">
                {this.props.categories.map((category) => {
                    return <CategoryItem 
                        name={category.name} 
                        value={category.active} 
                        id={category.id}
                        key={category.id} 
                        onClick={(this.handleClick)}
                    />
                })}
            </div>
            <div className="display-region">
                <Display name={activeCategory.name} />
            </div>
          </div>
        );
    }
}


export default App;
