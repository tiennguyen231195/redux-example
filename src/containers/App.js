import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { addItem, removeItem	}	from '../actions';
import AddItem from	'../components/AddItem';
import ItemList	from '../components/ItemList';
import Constants from '../constants/app-constants';

class App extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired
  }

  render() {
    const { dispatch, items } = this.props;
    return (
      <div>
        <AddItem onAddClick={ item => dispatch(addItem(item)) }	/>
        <ItemList items={ items } onRemoveItem={ id	=> dispatch(removeItem(id)) } />
      </div>
    );
  }
}

function select(state) {
  return {
    items: state.items
  };
}

export default connect(select)(App);
