import "./Navbar.css";

import logo from "../assets/images/logo.png";
import searchIcon from "../assets/icons/search-icon.png";
import wishlistIcon from "../assets/icons/heart.png";
import cartIcon from "../assets/icons/cart-icon.png";

function Navbar() {
  return (
    <>
      {/* Top Shipping Bar */}
      <div className="top-bar">
        <div className="container-fluid">
          <span className="new-badge">NEW</span>
          Free shipping on orders above ₹499 | Easy 7-day returns
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="ShopKart" className="shopkart-logo" />
          </a>

          {/* All Categories Dropdown */}
          <div className="dropdown category-dropdown">
            <button
              className="category-btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Categories
            </button>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Electronics</a></li>
              <li><a className="dropdown-item" href="#">Fashion</a></li>
              <li><a className="dropdown-item" href="#">Home &amp; Kitchen</a></li>
              <li><a className="dropdown-item" href="#">Beauty &amp; Personal Care</a></li>
              <li><a className="dropdown-item" href="#">Sports &amp; Fitness</a></li>
              <li><a className="dropdown-item" href="#">Books &amp; Stationery</a></li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar"
            aria-controls="shopKartNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="shopKartNavbar">
            <ul className="navbar-nav main-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#trending">Trending 🔥</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>

            {/* Search */}
            <div className="search-box">
              <input type="text" placeholder="Search for products..." />
              <button className="search-btn" type="button" aria-label="Search">
                <img src={searchIcon} alt="" />
              </button>
            </div>

            {/* Icons */}
            <div className="nav-actions">
              <img
                src={wishlistIcon}
                alt="Wishlist"
                className="nav-icon"
              />

              <div className="cart-wrapper">
                <img src={cartIcon} alt="Cart" className="nav-icon" />
                <span className="cart-count">3</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;