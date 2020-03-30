import React, { Component } from "react";
import ProducInTable from "./ProducInTable";
import "./MainWindow.css";

class MainWindow extends Component {
  static defaultProps = {
    tableHead: [
      "Desert (100g serving)",
      "Calories",
      "Fat(g)",
      "Carbs(g)",
      "Protein(g)",
      "Active"
    ],
    products: [
      {
        productName: "Frozen yoghurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        productName: "Ice cream sandwich",
        calories: 237,
        fat: 9,
        carbs: 37,
        protein: 4.3
      },
      { productName: "Eclair", calories: 262, fat: 16, carbs: 24, protein: 6 },
      {
        productName: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
      },
      {
        productName: "Marshmallow",
        calories: 318,
        fat: 0,
        carbs: 81,
        protein: 2
      }
    ]
  };
  render() {
    return (
      <div className="MainWindow">
        <h1>Warehouse Product's Table</h1>
        <table>
          <thead>
            <tr>
              {this.props.tableHead.map(th => (
                <th>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(p => (
              <ProducInTable product={p} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MainWindow;
