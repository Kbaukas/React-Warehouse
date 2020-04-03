import React, { Component } from "react";
import "./ProducInTable.css";
import EditForm from "./EditForm";

class ProducInTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }
  // click handler to remove element
  handleRemove(evt) {
    this.props.remove(this.props.id);
  }
  showEditForm(evt) {
    this.setState({
      editing: !this.state.editing
    });
  }
  closeForm() {
    this.setState({
      editing: !this.state.editing
    });
  }
  componentWillUnmount() {
    console.log("Unmount");
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
    return this.state.editing ? (
      <tr className="ProducInTable">
        <td className="editable" colSpan="9">
          <EditForm
            close={this.closeForm}
            updateTable={this.props.update}
            product={this.props.product}
          ></EditForm>
        </td>
      </tr>
    ) : (
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
          <button onClick={this.showEditForm} className="edit">
            Edit
          </button>
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
