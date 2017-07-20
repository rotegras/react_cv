import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import CATEGORIES from './categorieslist.js';
import './App.css';


function Display (props) {
    return (
        <div className="display">
            {CATEGORIES[1].name}
        </div>
    );
}

Display.propTypes = {
    value: PropTypes.string.isRequired,
}


function CategoryItem (props, index) {
    return (
        <div className="menu-categoria">
            <button className="menu-button" onClick={props.onClick} >
               <div>
                    {props.name}
               </div> 
               <div className={props.value} />
            </button>
        </div>
    );
}

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.boolean,
}


class App extends React.Component {
    constructor (props) {
        super(props);
        this.props = {
            categories: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
            })).isRequired,
        }
        this.state = ({
            categoryName: "Persönliche Daten", 
            categoryActive: true, 
            id: 1,
        })

    }
    render() {
        return (
          <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <div className="App-menu">
                {this.props.categories.map(function(category) {
                    return <CategoryItem name={category.name} value={category.active} key={category.id} />
                })}
            </div>
            <div className="display-region">
                <Display value={this.state.categoryName} />
            </div>
          </div>
        );
    }
}


export default App;
