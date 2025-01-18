import React, { useState } from "react";
import "./ViewProducts.css"; // Updated styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";

const ProductForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [onSale, setOnSale] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const [formVisible, setFormVisible] = useState(false)

  const toggleForm = () => {
    setFormVisible((prev) => !prev)
  }

  return (
    <div className="form-container">
      <div className="show-form">
      <h2>Add New Product</h2>
      <button className="productForm-removeBtn" onClick={toggleForm}><FontAwesomeIcon icon={faXmark}/></button>
      <form className="product-form">
        <div className="form-group">
          <label htmlFor="id">Product ID</label>
          <input type="number" id="id" name="id" placeholder="Enter Product ID" required />
        </div>

        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input type="text" id="name" name="name" placeholder="Enter Product Name" required />
        </div>

        <div className="form-group image-upload">
          <label htmlFor="image">Product Image</label>
          <div className="custom-file-upload">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <span>Choose Image</span>
          </div>
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Product Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" placeholder="Enter Price" required />
        </div>

        <div className="form-group">
          <label htmlFor="discountPrice">Discount Price</label>
          <input
            type="number"
            id="discountPrice"
            name="discountPrice"
            placeholder="Enter Discount Price"
          />
        </div>

        <div className="form-group toggle-group">
          <label htmlFor="onSale">On Sale</label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="onSale"
              name="onSale"
              checked={onSale}
              onChange={(e) => setOnSale(e.target.checked)}
            />
            <label htmlFor="onSale" className="slider"></label>
          </div>
        </div>

        {onSale && (
          <div className="form-group">
            <label htmlFor="sale">Sale Percentage</label>
            <input
              type="number"
              id="sale"
              name="sale"
              placeholder="Enter Sale Percentage"
              required={onSale}
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="">Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Home">Home</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" placeholder="Enter Stock Quantity" required />
        </div>

        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
      </div>
    </div>
  );
};

export default ProductForm;
