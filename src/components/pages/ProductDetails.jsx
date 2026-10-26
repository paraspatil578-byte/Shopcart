import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import productDetails from "../../data/productDetails";
import "./ProductDetails.css";

function ProductDetails({ userName, cart, dispatch }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  // useParams() gives a string ("3"), so convert it to a number before searching
  const product = productDetails.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar userName={userName} cart={cart} />

        <main className="product-not-found">
          <h1>Product Not Found</h1>
          <p>The product you are looking for does not exist.</p>

          <Link to="/products">Back to Products</Link>
        </main>
      </>
    );
  }

  const isInStock = product.availability === "In Stock";

  // Only the fields the cart needs (keeps the saved cart small)
  const cartItem = {
    id: product.id,
    name: product.name,
    category: product.category,
    image: product.image,
    price: product.price,
    originalPrice: product.originalPrice,
  };

  const addProductToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", payload: cartItem });
    }
  };

  const handleAddToCart = () => {
    addProductToCart();
  };

  const handleBuyNow = () => {
    addProductToCart();
    navigate("/cart");
  };

  // wheelType -> Wheel Type
  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (letter) => letter.toUpperCase());
  };

  return (
    <>
      <Navbar userName={userName} cart={cart} />

      <main className="product-details-page">
        <section className="product-overview">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info-section">
            <p className="product-category">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-brand">Brand: {product.brand}</p>

            <div className="product-rating">
              ⭐ {product.rating}
              <span>({product.reviews} reviews)</span>
            </div>

            <p className="product-short-description">
              {product.shortDescription}
            </p>

            <div className="product-pricing">
              <span className="current-price">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="original-price">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="discount">{product.discount} OFF</span>
            </div>

            <div className="product-availability">
              <strong>{product.availability}</strong>
              <p>Free delivery available on eligible orders.</p>
            </div>

            <div className="purchase-section">
              <div className="quantity-section">
                <span>Quantity</span>

                <div className="quantity-control">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((previous) => Math.max(1, previous - 1))
                    }
                  >
                    −
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={() => setQuantity((previous) => previous + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="purchase-buttons">
                <button
                  type="button"
                  className="add-cart-btn"
                  onClick={handleAddToCart}
                  disabled={!isInStock}
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="buy-now-btn"
                  onClick={handleBuyNow}
                  disabled={!isInStock}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="product-description-section">
          <h2>Product Description</h2>
          <p>{product.description}</p>
        </section>

        <section className="product-features-section">
          <h2>Key Features</h2>

          <ul>
            {product.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="specifications-section">
          <h2>Specifications</h2>

          <div className="specifications-grid">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key}>
                <strong>{formatKey(key)}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="product-reviews-section">
          <h2>Customer Reviews</h2>

          <div className="reviews-list">
            {product.customerReviews.map((review, index) => (
              <article className="review-card" key={index}>
                <h3>{review.name}</h3>
                <p className="review-rating">⭐ {review.rating}/5</p>
                <p>{review.comment}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;