import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from '../../components/DataProvider';
import ProductList from './components/ProductList';
import { useHistory } from 'react-router-dom';


Products.propTypes = {
    
};

function Products(props) {

    const history = useHistory();

    useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        history.push('/product/login');
      }
      
      //eslint-disable-next-line
    }, []); 
  
    return (
        <div>
        <ProductList />
        </div>
    );
}

export default Products;