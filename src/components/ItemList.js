import React, { Component, PropTypes } from 'react';
import Item from './Item';

export default class ItemList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired,
    onRemoveItem: PropTypes.func.isRequired
  }

	render() {
		return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item, index) =>
            <Item	key={ index } item={ item } onRemoveItem={ () => this.props.onRemoveItem(item.id) }	/>
          )}
        </tbody>
      </table>
		);
	}
}
