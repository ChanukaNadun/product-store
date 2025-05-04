import React from 'react'

function Card({product, index}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
      <div className="card p-2 shadow-sm border-0 product-card-body">
        <img
          src={product.image}
          className="card-img-top product-card-image"
          alt={product.title}
        />
        <p className="card-text text-end text-danger">
          Price: ${product.price}
        </p>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="card-text">{product.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card
