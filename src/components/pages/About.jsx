import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./About.css";

// Load every brand logo from src/assets/images/brands
const brandImages = import.meta.glob(
  "../../assets/images/brands/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
);

const normalize = (text) =>
  text.toLowerCase().replace(/\.[a-z]+$/, "").replace(/[^a-z0-9]/g, "");

const getBrandImage = (fileName) => {
  const key = Object.keys(brandImages).find(
    (path) => normalize(path.split("/").pop()) === normalize(fileName)
  );
  return key ? brandImages[key] : undefined;
};

const brands = [
  { id: 1, name: "Samsung", file: "samsung" },
  { id: 2, name: "boAt", file: "boat" },
  { id: 3, name: "Puma", file: "puma" },
  { id: 4, name: "LG", file: "lg" },
  { id: 5, name: "Philips", file: "philips" },
  { id: 6, name: "The Ordinary", file: "ordinary" },
  { id: 7, name: "Nivea", file: "nivea" },
  { id: 8, name: "Himalaya", file: "himalaya" },
  { id: 9, name: "Apple", file: "apple" },
  { id: 10, name: "Fastrack", file: "fastrack" },
  { id: 11, name: "Amazon", file: "amazon" },
  { id: 12, name: "Levi's", file: "levis" },
  { id: 13, name: "Nike", file: "nike" },
  { id: 14, name: "Adidas", file: "adidas" },
  { id: 15, name: "Zara", file: "zara" },
  { id: 16, name: "H&M", file: "hm" },
  { id: 17, name: "Canon", file: "canon" },
  { id: 18, name: "Dyson", file: "dyson" },
  { id: 19, name: "Intel", file: "intel" },
  { id: 20, name: "Ray-Ban", file: "rayban" },
].map((brand) => ({ ...brand, image: getBrandImage(brand.file) }));

function About({ userName, cart }) {
  // "#brands" would break HashRouter, so scroll with JavaScript instead
  const scrollToBrands = (e) => {
    e.preventDefault();
    document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar userName={userName} cart={cart} />

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-content">
            <div className="about-label">
              <span></span>
              ABOUT US
            </div>

            <h1>
              About <span>us</span>
            </h1>

            <h2>
              Making everyday shopping simpler, <br /> faster and more
              enjoyable.
            </h2>

            <p>
              At ShopKart, we believe great products should be accessible to
              everyone. We are an online shopping destination offering a wide
              range of high-quality products at great prices, delivered right
              to your doorstep.
            </p>

            <p>
              From fashion and electronics to home essentials and more —
              we're here to make shopping easier, better, and more delightful
              for you.
            </p>

            <div className="about-buttons">
              <Link to="/products" className="shop-btn">
                Shop now
                <span>→</span>
              </Link>

              <a href="#brands" className="learn-btn" onClick={scrollToBrands}>
                Learn more
              </a>
            </div>

            <div className="about-tagline">
              Shop Smarter, Live Better
              <span></span>
            </div>
          </div>
        </section>

        {/* Trusted Brands */}
        <section className="brands-section" id="brands">
          <div className="brands-heading">
            <h2>Trusted by leading brands</h2>

            <p>
              We're proud to partner with some of the world's most trusted
              brands to bring you the best products and shopping experience.
            </p>
          </div>

          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-item" key={brand.id}>
                {brand.image ? (
                  <img src={brand.image} alt={brand.name} />
                ) : (
                  <span>{brand.name}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default About;