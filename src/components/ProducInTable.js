import React, { Component } from "react";

class ProducInTable extends Component {
  render() {
    const { productName, calories, fat, carbs, protein } = this.props.product;
    console.log(productName);
    return (
      <tr>
        <td>{productName}</td>
        <td>{calories}</td>
        <td>{fat}</td>
        <td>{carbs}</td>
        <td>{protein}</td>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <button>View</button>
        </td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProducInTable;
