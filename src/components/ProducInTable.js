import React, { Component } from "react";
import uuid from "uuid/v4";
import "./ProducInTable.css";

class ProducInTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleRemove = this.handleRemove.bind(this);
  }
  // click handler to remove element
  handleRemove(evt) {
    this.props.remove(this.props.id);
    // this.props.remove(this.props.id);
    // console.log(this.props.remove);
  }
  render() {
    // getting props from parent element(MainWindow) and unwrapping
    const {
      productName,
      calories,
      fat,
      carbs,
      protein,
      id
    } = this.props.product;
    console.log(productName);
    return (
      // passing props to html <td> elements
      <tr className="ProducInTable">
        <td>{productName}</td>
        <td>{calories}</td>
        <td>{fat}</td>
        <td>{carbs}</td>
        <td>{protein}</td>

        <td>
          <input type="checkbox" />
        </td>
        <td>
          <button className="view">View</button>
        </td>
        <td>
          <button className="edit">Edit</button>
        </td>
        <td>
          <button className="delete" onClick={this.handleRemove}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProducInTable;
