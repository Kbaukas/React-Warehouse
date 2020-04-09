import React, { Component } from "react";
import "./css/EditForm.css";
import { Link } from "react-router-dom";
class EditForm extends Component {
  constructor(props) {
    super(props);
    //**************** */ unwraping props
    const {
      productName,
      type,
      weight,
      color,
      price,
      quantity,
      id,

      showChanges,
    } = this.props.product;
    // ************************defining default input values
    this.state = {
      productName: productName,
      type: type,
      weight: weight,
      color: color,
      price: price,
      quantity: quantity,

      // ********************showChanges: new Set([showChanges]),
    };

    this.hadleChange = this.hadleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hadleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    let name = this.state.productName;
    let setas =
      this.props.product.showChanges.size > 0
        ? new Set([...this.props.product.showChanges])
        : new Set([this.state.productName]);
    setas.add(this.state.productName);
    console.log(setas);

    this.setState((cuState) => ({
      showChanges: setas.add(this.props.product.productName),
    }));

    this.props.updateTable(this.props.product.id, this.state, setas);
    this.props.close();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Form Update");
  }
  render() {
    console.log("id " + this.state.ean);
    // productName: productName,
    //   ean: ean,
    //     type: type,
    //       weight: weight,
    //         color: color
    return (
      <div className="EditForm">
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>Product Name</p>
            <input
              className="input_1"
              name="productName"
              onChange={this.hadleChange}
              placeholder="Product name"
              value={this.state.productName}
            />
          </div>

          {/* <input
            className="input_2"
            type="text"
            name="ean"
            onChange={this.hadleChange}
            placeholder="EAN"
            value={this.state.ean.$oid}
          /> */}
          <div>
            <p>Type</p>

            <input
              className="input_3"
              type="text"
              name="type"
              onChange={this.hadleChange}
              placeholder="Type"
              value={this.state.type}
            />
          </div>
          <div>
            <p>Weight</p>
            <input
              className="input_4"
              type="number"
              name="weight"
              onChange={this.hadleChange}
              placeholder="Weight(g)"
              value={this.state.weight}
            />
          </div>
          <div>
            <p>Color</p>
            <input
              className="input_5"
              type="text"
              name="color"
              onChange={this.hadleChange}
              placeholder="Color"
              value={this.state.color}
            />
          </div>
          <div>
            <p>Price</p>
            <input
              className="input_6"
              type="number"
              name="price"
              onChange={this.hadleChange}
              placeholder="Price (EUR)"
              value={this.state.price}
            />
          </div>
          <div>
            <p>Quantity</p>
            <input
              className="input_7"
              type="text"
              name="quantity"
              onChange={this.hadleChange}
              placeholder="Quantity"
              value={this.state.quantity}
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <a onClick={() => this.props.close()}>X</a>
          </div>
        </form>
      </div>
    );
  }
}

export default EditForm;
