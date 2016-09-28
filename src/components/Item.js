import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onRemoveItem: PropTypes.func.isRequired
  }

	render() {
    const { id, name, price } = this.props.item;
		return (
			<tr>
				<td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td><button onClick={ this.props.onRemoveItem }>Remove</button></td>
			</tr>
		);
	}
}
