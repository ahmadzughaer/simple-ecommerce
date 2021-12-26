import React, { Component } from 'react';
import Api from '../../api/Api';
import './ProductDetails.style.css'
class ProductDetails extends Component {
  state = { data: {} };

  async componentDidMount() {
    try {
      const data = await Api.get(this.props.details.id );
      console.log(data);
      this.setState({ data: data.data });
    } catch (err) {}
  }

  render() {
    console.log('brr');
    return (
      <div className="List" >
      <img src={this.state.data.image} alt={this.state.data.brand} style={{ height: "300px" }} />
      <div className="details">
        <h4>{this.state.data.brand}</h4>
        <h5>Description: {this.state.data.description}</h5>
        <h4>Price {this.state.data.price}</h4>
        <button >Add to Cart</button>
      </div>
    </div>
    );
  }
}

export default ProductDetails;
