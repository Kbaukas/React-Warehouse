import React, { Component } from "react";
import "./css/EditForm.css";

class EditForm extends Component {
  constructor(props) {
    super(props);
    // unwraping props
    const { productName, type, weight, color, id } = this.props.product;
    // defining default input values
    this.state = {
      productName: productName,
      type: type,
      weight: weight,
      color: color
    };
    this.hadleChange = this.hadleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hadleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTable(this.props.product.id, this.state);
    this.props.close();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Form Update");
  }
  render() {
    // productName: productName,
    //   ean: ean,
    //     type: type,
    //       weight: weight,
    //         color: color
    return (
      <div className="EditForm">
        <form onSubmit={this.handleSubmit}>
          <input
            className="input_1"
            name="productName"
            onChange={this.hadleChange}
            placeholder="Product name"
            value={this.state.productName}
          />

          {/* <input
            className="input_2"
            type="number"
            name="ean"
            onChange={this.hadleChange}
            placeholder="EAN"
            value={this.state.ean}
          /> */}

          <input
            className="input_3"
            type="text"
            name="type"
            onChange={this.hadleChange}
            placeholder="Type"
            value={this.state.type}
          />

          <input
            className="input_4"
            type="number"
            name="weight"
            onChange={this.hadleChange}
            placeholder="Weight(g)"
            value={this.state.weight}
          />

          <input
            className="input_5"
            type="text"
            name="color"
            onChange={this.hadleChange}
            placeholder="Color"
            value={this.state.color}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
