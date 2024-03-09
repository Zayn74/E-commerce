import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function BrandProducts() {
  let id = useParams();
  const [allBrandProducts, setBrandProducts] = useState(null);

  async function getBrandsProducts() {
    try {
      let res = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/products",
        {
          params: { brand: id.id },
        }
      );
      setBrandProducts(res.data.data);
    } catch (error) {
      console.log("errrr", error);
    }
  }
  useEffect(function () {
    getBrandsProducts();
  }, []);

  return  <>
      {allBrandProducts ? (
        <div className="container py-5">
          <div className="row align-items-center justify-content-center">
            {allBrandProducts.length == 0 ? (
              <h1 className=" text-center text-primary py-5">NO PRODUCTS AVILABLE FOR THIS BRAND NOW, STAY TUNED...</h1>
            ) : (
              allBrandProducts.map(function (product, idx) {
                return (
                  <div key={idx} className="col-sm-3  product">
                    <Link to={`/prodetails/${product.id}`}>
                    <div className="item card rounded-5 ">
                      <img src={product.imageCover} alt={product.title} className="img-fluid rounded-5" />
                      <h5 className=" text-center">{product.title.slice(0, product.title.indexOf(' ', 10))}</h5>
                      <h6 className=" text-center">{product.category.name}</h6>

                      <h6 className=" text-center">price: { product.priceAfterDiscount? <>
                      <span className=" text-decoration-line-through">{product.price}</span>
                      <span className="ms-2">{product.priceAfterDiscount}</span>
                      
                      </>:<span>{product.price}</span>}</h6>

                      <h6 className=" ms-3 ">
                            <i className="fa-solid fa-star text-warning"></i>
                            {product.ratingsAverage} </h6>
                    </div>
                    </Link>
                       
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : (
        <LoadingScreen/>
      )}
    </>
  
}
