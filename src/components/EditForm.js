import React, { Component } from "react";
import "./EditForm.css";

class EditForm extends Component {
  constructor(props) {
    super(props);
    // unwraping props
    const {
      productName,
      calories,
      fat,
      carbs,
      protein,
      id
    } = this.props.product;
    // defining default input values
    this.state = {
      productName: productName,
      calories: calories,
      fat: fat,
      carbs: carbs,
      protein: protein
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
  render() {
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

          <input
            className="input_2"
            type="number"
            name="calories"
            onChange={this.hadleChange}
            placeholder="Calories"
            value={this.state.calories}
          />

          <input
            className="input_3"
            type="number"
            name="fat"
            onChange={this.hadleChange}
            placeholder="Fat(g)"
            value={this.state.fat}
          />

          <input
            className="input_4"
            type="number"
            name="carbs"
            onChange={this.hadleChange}
            placeholder="Carbs(g)"
            value={this.state.carbs}
          />

          <input
            className="input_5"
            type="number"
            name="protein"
            onChange={this.hadleChange}
            placeholder="Protein(g)"
            value={this.state.protein}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
