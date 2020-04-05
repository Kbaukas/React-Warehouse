import React, { Component } from "react";
import ProducInTable from "./ProducInTable";
import "./css/MainWindow.css";
import { v4 as uuidv4 } from "uuid";

import PRODUCT_DATA from "./data/jsonData.json";
import EditForm from "./EditForm";
class MainWindow extends Component {
  // *******default props for table Head********
  static defaultProps = {
    tableHead: [
      "Index",
      "Product Name",
      "EAN",
      "Type",
      "Weight(g)",
      "Color",
      "Active",
    ],
  };

  constructor(props) {
    super(props);
    //*****Initial state from Json******** */

    this.state = {
      products:
        localStorage.length > 0
          ? JSON.parse(localStorage.getItem("products"))
          : this.readJason(),
    };
    this.removeRecord = this.removeRecord.bind(this);
    this.readJason = this.readJason.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.handleLoadData = this.handleLoadData.bind(this);
  }
  //****function to add unique id to each product  and use this function to initiate state*/
  handleLoadData(evt) {
    this.setState({
      products: JSON.parse(localStorage.getItem("products")),
    });
  }
  componentDidMount() {
    if (this.state.products.length === 0) {
      this.readJason();
    }
  }

  readJason() {
    let newProduct = [];
    PRODUCT_DATA.products.map((product, index) => {
      newProduct.push({
        ...product,
        active: false,
        id: uuidv4(),
        Index: index + 1,
      });
    });
    localStorage.setItem("products", JSON.stringify(newProduct));
    let productsLocal = JSON.parse(localStorage.getItem("products"));
    this.setState({
      products: productsLocal,
    });
    console.log("newProduct");
    console.log(newProduct);
    return newProduct;
  }

  //********remove product**** if active is true */
  removeRecord(id) {
    console.log("remove");
    this.setState(
      (cuState) => ({
        products: cuState.products.filter(
          (product) => product.active === false
        ),
      }),
      () =>
        localStorage.setItem("products", JSON.stringify(this.state.products))
    );
  }
  // *********Select deselect Active*******
  toggleActive(id) {
    this.setState(
      (cuState) => ({
        products: cuState.products.map((product) =>
          product.id === id ? { ...product, active: !product.active } : product
        ),
      }),
      () =>
        localStorage.setItem("products", JSON.stringify(this.state.products))
    );
  }
  //***** */ updating table  ******
  updateTable(id, editData) {
    // "Index",
    // "Product Name",
    //   "EAN",
    //   "Type",
    //   "Weight",
    //   "Color",
    const { productName, type, weight, color } = editData;
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          productName: productName,
          type: type,
          weight: weight,
          color: color,
        };
      }
      return product;
    });
    this.setState({
      products: updatedProducts,
    });
    // *************************
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    let products = JSON.parse(localStorage.getItem("products"));
    console.log(products);
    // ***************************
  }

  render() {
    return (
      <div className="MainWindow">
        <button onClick={this.handleLoadData}>Load Data</button>
        <h1>Warehouse Product's Table</h1>
        {/********  genarating table*********** */}
        <table>
          {/* Table head */}
          <thead>
            <tr>
              {this.props.tableHead.map((th) => (
                <th key={uuidv4()}>{th}</th>
              ))}
            </tr>
          </thead>
          {/* generating table body  */}
          <tbody>
            {this.state.products !== null &&
              this.state.products.map((product, index) => (
                <ProducInTable
                  activate={this.toggleActive}
                  index={index + 1}
                  update={this.updateTable}
                  key={product.id}
                  id={product.id}
                  product={product}
                  remove={this.removeRecord}
                />
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="10">
                <div className="links">
                  <a href="#">&laquo;</a>{" "}
                  <a className="active" href="#">
                    1
                  </a>{" "}
                  <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
                  <a href="#">&raquo;</a>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        {/* <EditForm /> */}
      </div>
    );
  }
}

export default MainWindow;
