import React, { Component } from "react";
import "./css/ProducInTable.css";
import EditForm from "./EditForm";

class ProducInTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      active: false,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  // click handler to remove element

  handleRemove(evt) {
    this.props.remove(this.props.id);
  }
  showEditForm(evt) {
    this.setState({
      editing: !this.state.editing,
    });
  }
  closeForm() {
    this.setState({
      editing: !this.state.editing,
    });
  }
  componentWillUnmount() {
    console.log("Unmount");
  }

  changeHandler(evt) {
    this.props.activate(this.props.product.id);
    // this.setState(cuState => ({
    //   [evt.target.name]: !evt.target.checked
    // }));
  }
  render() {
    // getting props from parent element(MainWindow) and unwrapping

    const {
      productName,
      ean,
      type,
      weight,
      color,
      active,
      id,
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
        <td>{this.props.index}</td>
        <td>{productName}</td>
        <td>{ean.$oid}</td>
        <td>{type}</td>
        <td>{weight}</td>
        <td>{color}</td>

        <td>
          <input
            type="checkbox"
            name="active"
            checked={active}
            onChange={this.changeHandler}
          />
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
