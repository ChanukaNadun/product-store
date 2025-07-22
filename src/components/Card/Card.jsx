import React from 'react'
import "./Card.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Card({product, index}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("Adding product to cart:", product);
  };
  
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
      <div className="card h-100 product-card shadow-sm border-0 overflow-hidden">
        <div className="product-image-container position-relative">
          <img
            src={product.image}
            className="card-img-top product-image"
            alt={product.title}
            loading="lazy"
          />
          {product.discount && (
            <span className="badge bg-danger position-absolute top-0 end-0 m-2">
              -{product.discount}%
            </span>
          )}
          <button className="btn btn-dark quick-view-btn position-absolute bottom-0 start-50 translate-middle-x mb-3 opacity-0">
            Quick View
          </button>
        </div>

        <div className="card-body pt-3 pb-2">
          {/* Category Tag */}
          <div className="mb-2">
            <span className="badge bg-light text-dark border">
              {product.category}
            </span>
          </div>

          {/* Product Title */}
          <h5 className="card-title product-title mb-2">
            <div
              // href="#"
              className="text-decoration-none text-dark stretched-link"
            >
              {product.title}
            </div>
            {/* </a> */}
          </h5>

          <div className="d-flex align-items-center mb-2">
            <div className="rating-stars text-warning">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`bi ${
                    i < product.rating.rate ? "bi-star-fill" : "bi-star"
                  }`}
                />
              ))}
            </div>
            <small className="text-muted ms-2">({product.rating.count})</small>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="h5 text-danger mb-0">${product.price}</span>
              {product.originalPrice && (
                <del className="text-muted small ms-2">
                  ${product.originalPrice}
                </del>
              )}
            </div>
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn btn-sm btn-outline-primary rounded-circle z-3"
            >
              <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
