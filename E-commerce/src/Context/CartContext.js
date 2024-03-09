import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'

export const cartContext= createContext();




export default function CartContextProvider({children}) {
    const nav =useNavigate();
    
const [numOfCartItems, setNumOfCartItems] = useState(0)
const [totalCartPrice, setTotalCartPrice] = useState(0)
const [cartProducts, setCartProducts] = useState(null)
const [cartId, setCartId] = useState(null)



    async function addProductToCart(proId) {

        try {
            const res= await axios.post('https://route-ecommerce.onrender.com/api/v1/cart',{
                "productId": proId
            },{
                headers:{'token':localStorage.getItem('tkn')}
            })
            if (res.data.status=='success') {
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log(error);
        }
   

     }

    async function getCartProducts() {
        try {
            const {data}= await axios.get('https://route-ecommerce.onrender.com/api/v1/cart',{
            headers:{'token':localStorage.getItem('tkn')}
        })

        if(data.status=== "success"){
            setNumOfCartItems(data.numOfCartItems);
            setTotalCartPrice(data.data.totalCartPrice);
            setCartProducts(data.data.products);
            setCartId(data.data._id)
           
        }
        } catch (error) {

            if (error.response.status==404) {

                $(".errorCart").fadeIn(300,function () {
                    setTimeout(() => {
                        $(".errorCart").fadeOut(300)
                        nav('/home')
                    },2000)
                  })
            }
            console.log(error);
        }
      }

      async function removeProduct(id) {
      try {
        const {data}= await axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{
            headers:{'token':localStorage.getItem('tkn')}
        })
        if (data.status==="success") {
            setNumOfCartItems(data.numOfCartItems);
            setTotalCartPrice(data.data.totalCartPrice);
            setCartProducts(data.data.products);
            
            return true
        }
      } catch (error) {
        console.log(error);
      }
        }

        async function updateCount(id,count) {
         try {
            const {data}= await axios.put( `https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{
                'count':count
            },{
                headers:{'token': localStorage.getItem('tkn')}
            })
            if (data.status==="success") {
                setNumOfCartItems(data.numOfCartItems);
                setTotalCartPrice(data.data.totalCartPrice);
                setCartProducts(data.data.products);
                
                return true
            }
         } catch (error) {
            console.log(error);
         }
          }


    // value is an object that contains the methods we want to share with child components
  return <cartContext.Provider value={{addProductToCart, numOfCartItems ,cartProducts, totalCartPrice,removeProduct,updateCount,cartId,getCartProducts}}>   

<div className='alert alert-danger errorCart' style={{'left':'0', 'z-index':'9999','display':'none'}}> No Items Added To your Cart</div>
  {children}
  </cartContext.Provider>
}
