import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DataContext } from '../../components/DataProvider';
import Colors from '../Products/components/DetailProducts/components/Colors';
import Sizes from '../Products/components/DetailProducts/components/Sizes';
import './style.css';


Cart.propTypes = {
    
};

function Cart(props) {
      
    const history = useHistory();

    useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        history.push('/product/login');
      }
      
      //eslint-disable-next-line
    }, []); 
     
    const value = useContext(DataContext)
     const [cart, setCart] = value.cart
       
      const [total, setTotal] = useState(0);
       
        const reduction = id => {
            cart.forEach(item =>{
                if(item._id === id) {
                    item.count === 1 ? item.count = 1 : item.count -= 1;
                }
            })
            setCart([...cart])
        }

        const increase = id => {
            cart.forEach(item =>{
                if(item._id === id) {
                    item.count += 1;
                }
            })
            setCart([...cart])
        }
  
        const removePro = id =>{
            if(window.confirm("Ban mua xoa sản phẩn không ?")){
                cart.forEach((item, index) =>{
                    if(item._id === id){
                   cart.splice(index, 1)
                    }
                })
            }
             setCart([...cart])
        }      

        useEffect(() => {
           const getTotal = () =>{
            const res = cart.reduce((prev, item) =>{
                 return prev + (item.price * item.count)
            },0)
             setTotal(res)
           }
            getTotal();
        }, [cart])
       

       if(cart.length === 0)
        return <h2>Cart Rỗng</h2>

    return (     
        <>
         {
          cart.map(cart => (
             <div className="details card" key={cart._id}>
                <div className="img-container" style={{backgroundImage: `url(${cart.images[0]})`}} />
                  
                  <div className="box-details">
                    <h2 title={cart.title}> {cart.title}</h2>
                    <h3>${cart.price}</h3>

                    <Colors colors={cart.colors} />
                      
                      <Sizes sizes={cart.sizes} />

                      <p>{cart.description}</p>
                      <p>{cart.content}</p>

                      <div className="amount">
                         <button className="count"  onClick={() => reduction(cart._id)}>-</button>
                        <span>{cart.count}</span>
                         <button className="count" onClick={() => increase(cart._id)} >+</button>
                     </div>   
                     <div className="delete" onClick={() => removePro(cart._id)}>
                         Delete Cart
                     </div> 
                  </div>  
             </div>
              
          ))
           
         }
                    <div className="total">
                        <Link to="/payment"> Payment </Link>
                          <h3>Total: ${total}</h3>
                      </div>
        </> 
         
    );

}

export default Cart;