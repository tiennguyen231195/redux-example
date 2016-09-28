import React, { Component, PropTypes } from 'react';
import linkState from 'react-link-state';

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        id: 0,
        name: null,
        price: 0
      }
    };
  }

  static propTypes = {
    onAddClick:	PropTypes.func.isRequired
  }

  handleClick(e) {
    // validate...
    this.props.onAddClick(this.state.item);
    e.preventDefault();
  }

  render() {
    // https://github.com/Volicon/NestedLink
    return (
      <form>
        <input type="text" valueLink={linkState(this, 'item.id')} />
        <input type="text" valueLink={linkState(this, 'item.name')} />
        <input type="text" valueLink={linkState(this, 'item.price')} />
        <button onClick={(e) => this.handleClick(e)}>Add new item</button>
      </form>
    );
  }
}
