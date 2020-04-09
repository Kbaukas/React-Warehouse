import React, { Component } from "react";
import ProducInTable from "./ProducInTable";
import "./css/MainWindow.css";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";

// import { MDBDataTable } from "mdbreact";

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
      "Price",
      "Quantity",
      "Active",
    ],
  };

  constructor(props) {
    super(props);
    //*****Initial state from Json******** */

    this.state = {
      products: [
        ...(localStorage.length > 0
          ? JSON.parse(localStorage.getItem("products"))
          : this.readJason()),
      ],
    };
    this.removeRecord = this.removeRecord.bind(this);
    this.readJason = this.readJason.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    // this.handleLoadData = this.handleLoadData.bind(this);
  }

  // handleLoadData(evt) {
  //   this.setState({
  //     products: JSON.parse(localStorage.getItem("products")),
  //   });
  // }
  componentDidMount() {
    if (this.state.products.length === 0) {
      this.readJason();
    }
  }
  //****function to add unique id to each product  and use this function to initiate state*/
  readJason() {
    let newProduct = [];
    PRODUCT_DATA.products.map((product, index) => {
      newProduct.push({
        ...product,
        weigth: product.weight.toFixed(2),
        active: false,
        id: uuidv4(),
        Index: index + 1,
        price: (Math.random() * 100).toFixed(2),
        quantity: Math.floor(Math.random() * 50),

        showChanges: new Set(product.productName),
        dateOfChanges: [new Date()],
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
  updateTable(id, editData, setas) {
    // "Index",
    // "Product Name",
    //   "EAN",
    //   "Type",
    //   "Weight",
    //   "Color",
    const { productName, type, weight, color, price, quantity } = editData;

    let tarpinisSetas = new Set();
    // var tarpinisMasyvas = [...showChanges];

    const updatedProducts = this.state.products.map((product) => {
      // console.log(product.historyName);
      // tarpinisSetas.add(productName);
      if (product.id === id) {
        return {
          ...product,
          productName: productName,
          type: type,
          weight: weight,
          color: color,
          price: price,
          quantity: quantity,
          showChanges: new Set([...setas, productName]),
          dateOfChanges:
            setas.size > product.showChanges.size
              ? [...product.dateOfChanges, new Date()]
              : product.dateOfChanges,
        };
      }
      return product;
    });
    this.setState((cuState) => ({
      products: [...updatedProducts],
    }));
    // *************************
    // const state = [...this.state.products.historyName, productName];
    // this.state.products.historyName.add(productName);
    localStorage.setItem("products", JSON.stringify([...updatedProducts]));
    let products = JSON.parse(localStorage.getItem("products"));

    // ***************************
  }
  componentDidUpdate() {
    // this.state.products.map(product=>({
    //   setState({
    //     product:{...product,showChanges.add("asadasd")}
    //   })
    // }))
  }
  addToChangeName(name) {
    this.setState({});
  }
  render() {
    return (
      <div className="MainWindow">
        {/* <button onClick={this.handleLoadData}>Load Data</button> */}
        <h1>Warehouse Product's Table</h1>
        {/********  genarating table*********** */}
        <table className="table-responsive">
          {/* Table head */}
          <thead>
            <tr className="">
              {this.props.tableHead.map((th) => (
                <th className="sticky-header " key={uuidv4()}>
                  {th}
                </th>
              ))}
              <th className="sticky-header "></th>
              <th className="sticky-header "></th>
              <th className="sticky-header "></th>
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
        </table>
        <div className="tableFooter"></div>
        {/* <EditForm /> */}
      </div>
    );
  }
}

export default MainWindow;
