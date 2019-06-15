import React, { Component } from 'react';

class CategoryItem extends Component {

  
   updateIndex = () => {
      const id = this.props.id ; 
      this.props.onClick ( id ); 
   }

   render(i) {
        return (
            <div className="menu-categoria">
                <button className="menu-button" onClick={this.updateIndex} >
                   <div>
                        {this.props.name}
                   </div> 
                </button>
            </div>
        );
    }
}

export default CategoryItem;
