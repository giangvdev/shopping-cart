import React, {createContext, useEffect, useState} from 'react';
 
 export const DataContext = createContext();

 export const DataProvider = (props) => {
     
     const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                "https://product.hstatic.net/1000269795/product/ya126327_afd406bccab74230b3c1e1d5ad555063_master.jpg",
                "https://www.techone.vn/wp-content/uploads/2020/09/MYAM2_VW_PFwatch-40-stainless-gold-cell-6s_VW_PF_WF_CO-500x500.jpg",
                "https://product.hstatic.net/1000269795/product/ya126487a_b04289a329204434abdec873ee2ee913_master.jpg",
                "https://product.hstatic.net/1000269795/product/ya126458_f55bf178b1854e53941d0a417590c0ab_master.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
             "count": 1
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                "https://www.techone.vn/wp-content/uploads/2020/09/MYAM2_VW_PFwatch-40-stainless-gold-cell-6s_VW_PF_WF_CO-500x500.jpg",
                "https://product.hstatic.net/1000269795/product/ya126327_afd406bccab74230b3c1e1d5ad555063_master.jpg",
                "https://product.hstatic.net/1000269795/product/ya126487a_b04289a329204434abdec873ee2ee913_master.jpg",
                "https://product.hstatic.net/1000269795/product/ya126458_f55bf178b1854e53941d0a417590c0ab_master.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1
        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
                "https://product.hstatic.net/1000269795/product/ya126487a_b04289a329204434abdec873ee2ee913_master.jpg",
                "https://product.hstatic.net/1000269795/product/ya126327_afd406bccab74230b3c1e1d5ad555063_master.jpg",
                "https://www.techone.vn/wp-content/uploads/2020/09/MYAM2_VW_PFwatch-40-stainless-gold-cell-6s_VW_PF_WF_CO-500x500.jpg",
                "https://product.hstatic.net/1000269795/product/ya126458_f55bf178b1854e53941d0a417590c0ab_master.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1
        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                "https://product.hstatic.net/1000269795/product/ya126458_f55bf178b1854e53941d0a417590c0ab_master.jpg",
                "https://product.hstatic.net/1000269795/product/ya126327_afd406bccab74230b3c1e1d5ad555063_master.jpg",
                "https://www.techone.vn/wp-content/uploads/2020/09/MYAM2_VW_PFwatch-40-stainless-gold-cell-6s_VW_PF_WF_CO-500x500.jpg",
                "https://product.hstatic.net/1000269795/product/ya126487a_b04289a329204434abdec873ee2ee913_master.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1
        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                "https://www.techone.vn/wp-content/uploads/2020/09/MYAM2_VW_PFwatch-40-stainless-gold-cell-6s_VW_PF_WF_CO-500x500.jpg",
                "https://product.hstatic.net/1000269795/product/ya126327_afd406bccab74230b3c1e1d5ad555063_master.jpg",
                "https://product.hstatic.net/1000269795/product/ya126487a_b04289a329204434abdec873ee2ee913_master.jpg",
                "https://product.hstatic.net/1000269795/product/ya126458_f55bf178b1854e53941d0a417590c0ab_master.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1
        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                "https://product.hstatic.net/1000269795/product/ya126487a_b04289a329204434abdec873ee2ee913_master.jpg",
                "https://product.hstatic.net/1000269795/product/ya126327_afd406bccab74230b3c1e1d5ad555063_master.jpg",
                "https://www.techone.vn/wp-content/uploads/2020/09/MYAM2_VW_PFwatch-40-stainless-gold-cell-6s_VW_PF_WF_CO-500x500.jpg",
                "https://product.hstatic.net/1000269795/product/ya126458_f55bf178b1854e53941d0a417590c0ab_master.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1
        }
     ])
   
      const [cart, setCart] = useState([])

     const addCart = (id) => {
         const check = cart.every((item) =>{
          return item._id !== id 
         })

         if(check) {
             const data = products.filter(pro => {
                  return pro._id === id
             })
             setCart([...cart, ...data])
         }
          else{
            alert("Đã có trong giỏ hàng")
          }
     }
        useEffect(() =>{
            const dataCart = JSON.parse(localStorage.getItem('dataCart'))
            if(dataCart) setCart(dataCart)
        }, []) 

       useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
       }, [cart])

      const value ={
          products: [products, setProducts],
          cart: [cart, setCart],
          addCart: addCart
      }
      return(
          <DataContext.Provider value={value}>
              {props.children}
          </DataContext.Provider>
      )
 }