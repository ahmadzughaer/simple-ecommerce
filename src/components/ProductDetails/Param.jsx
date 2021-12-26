import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
const Param = () => {
  const props = useParams();
  return <ProductDetails details={props} />;
};
export default Param;
