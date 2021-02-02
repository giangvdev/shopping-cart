
import React, { useContext, useState } from 'react';
import './style.css'
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../../../../components/DataProvider';
import Colors from './components/Colors';
import Sizes from './components/Sizes';
import DetailThumb from './components/DetailThums';


Detail.propTypes = {
    
};

function Detail(props) {
    const {id} = useParams();
    
    const value = useContext(DataContext)
   const [products] = value.products
   const addCart = value.addCart

    const [index, setIndex] = useState(0)

    const details = products.filter((products, index) => {
        return products._id === id
    })
    return (     
        <>
         {
          details.map(det => (
             <div className="details" key={det._id}>
                <div className="img-container" style={{backgroundImage: `url(${det.images[index]})`}} />
                  
                  <div className="box-details">
                    <h2 title={det.title}> {det.title}</h2>
                    <h3>${det.price}</h3>
                     <p>{det.description}</p>
                      <Colors colors={det.colors} />
                      <Sizes sizes={det.sizes}/>
                      <DetailThumb images={det.images} setIndex={setIndex} />

                       <Link to="/cart" className="cart" onClick= {() => addCart(det._id)} >
                         ADD TO CART
                       </Link>
                  </div>
                      
             </div>
          ))
         }
        </> 
    );
}

export default Detail;