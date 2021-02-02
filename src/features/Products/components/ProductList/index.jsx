import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../../components/DataProvider';



ProductList.propTypes = {
  productList: PropTypes.array,
};

 ProductList.defaultProps ={
    productList: [],
 };

function ProductList(props) {

   const value = useContext(DataContext)
   const [products] = value.products
   const addCart = value.addCart
   
    return (
      
           <div className="products" > 
           {
            products.map(pro => (
               <div className="card" key={pro._id}>
               <Link to= {`/product/${pro._id}`} > 
                   <img src={pro.images[0]} alt="" className="img-sp"/>
               </Link>
                <div className="box">
                   <h3 title={pro.title}>
                     <Link  to={`/product/${pro._id}`}>
                     {pro.title}
                     </Link>
                   </h3>
                   <p>Descrip</p>
                   <h4>$100</h4>
                   <button onClick= {() => addCart(pro._id)} >ADD TO CARD</button>
                </div>
             </div>
              ))
           }
         </div>
      
    )
}

export default ProductList;