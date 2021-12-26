import React, { Component } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/Api.js";
import "./Products.style.css";
class Category extends Component {
  state = { errorMes: null, data: [] };
  async componentDidMount() {
    try {
      const data = await Api.get("");
      this.setState({ data: data.data });
    } catch (err) {
      console.log(err);
    }
  }

  insertStreets = () => {
    return this.state.data.map((e) => {
      return (
        <Link className="Link" key={e.id} to={`/product/${e.id}`}>
          <div className="List" >
            <img src={e.image} alt={e.brand} style={{ height: "300px" }} />
            <div className="details">
              <h4>{e.brand}</h4>
              <h5>Description: {e.description}</h5>
              <h4>Price {e.price}</h4>
            </div>
          </div>
        </Link>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>All Products</h2>
        {this.insertStreets()}
      </div>
    );
  }
}

export default Category;
