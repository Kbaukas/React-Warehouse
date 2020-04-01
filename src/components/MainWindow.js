import React, { Component } from "react";
import ProducInTable from "./ProducInTable";
import "./MainWindow.css";
import uuid from "uuid/v4";
import ProductData from "./data/jsonData.json";
class MainWindow extends Component {
  // *******default props for table Head********
  static defaultProps = {
    tableHead: [
      "Desert (100g serving)",
      "Calories",
      "Fat(g)",
      "Carbs(g)",
      "Protein(g)",
      "Active"
    ]
  };
  constructor(props) {
    super(props);
    //*****Initial state from Json******** */
    this.state = {
      products: this.readJason()
    };
    this.removeRecord = this.removeRecord.bind(this);
    this.readJason = this.readJason.bind(this);
  }
  //****function to add unique id to each product  and use this function to initiate state*/
  readJason() {
    let newProduct = [];
    ProductData.products.map(product => {
      newProduct.push({ ...product, active: false, id: uuid() });
    });
    return newProduct;
  }
  //********remove product**** by id */
  removeRecord(id) {
    console.log("remove");
    this.setState(cuState => ({
      products: cuState.products.filter(product => product.id !== id)
    }));
  }

  render() {
    return (
      <div className="MainWindow">
        <h1>Warehouse Product's Table</h1>
        {/********  genarating table*********** */}
        <table>
          {/* Table head */}
          <thead>
            <tr>
              {this.props.tableHead.map(th => (
                <th key={uuid()}>{th}</th>
              ))}
            </tr>
          </thead>
          {/* generating table body  */}
          <tbody>
            {this.state.products.map(product => (
              <ProducInTable
                key={product.id}
                id={product.id}
                product={product}
                remove={this.removeRecord}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MainWindow;
