import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Sidebar.css";

const BlogPostForm = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    date: "",
    description: "",
    content: "",
    heroImage: null, // To store the Hero Image file
  });

  console.log(blogData)

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  // Handle hero image file change
  const handleHeroImageChange = (e) => {
    const file = e.target.files[0];
    setBlogData({ ...blogData, heroImage: file });
  };

  // Handle content change in ReactQuill
  const handleContentChange = (value) => {
    setBlogData({ ...blogData, content: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Data:", blogData);
    // Perform the logic to submit the data (e.g., API call)
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [controlsVisible, setControlsVisible] = useState(false);

  const handleImageClick = (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "IMG") {
      setSelectedImage(clickedElement); // Store the clicked image
      setControlsVisible(true); // Show image controls
    } else {
      setSelectedImage(null); // Deselect the image
      setControlsVisible(false); // Hide image controls
    }
  };

  const resizeImage = (size, isWidth = true) => {
    if (selectedImage) {
      if (isWidth) {
        selectedImage.style.width = size;
        selectedImage.style.height = size; // Ensure height matches the width for a square
      } else {
        selectedImage.style.height = size;
        selectedImage.style.width = size; // Ensure width matches the height for a square
      }
      selectedImage.style.objectFit = "cover"; // Ensure image fills the square without distortion
    }
  };

  const alignImage = (alignment) => {
    if (selectedImage) {
      selectedImage.style.display = "block";
      selectedImage.style.marginLeft = alignment === "center" ? "auto" : "0";
      selectedImage.style.marginRight = alignment === "center" ? "auto" : "0";
      selectedImage.style.float =
        alignment === "left" || alignment === "right" ? alignment : "none";
    }
  };

  const removeImage = () => {
    if (selectedImage) {
      selectedImage.remove(); // Remove the selected image
      setSelectedImage(null); // Clear the selected image
      setControlsVisible(false); // Hide image controls
    }
  };

  // Define the toolbar with additional features
  const modules = {
    toolbar: [
      [{ header: [1, 2,3,4,5,6, false] }],
      [{ font: [] }],
      [{ size: ['small', 'medium', 'large', 'huge'] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "blockquote", "code-block", "formula"],
      [{ align: [] }],
      ["emoji", "table", "video", "audio"],  // Additional options like emojis, tables, etc.
      ["color", "background"],
    ],
  };

  const formats = [
    "header", "font", "size", "bold", "italic", "underline", "strike", "list", "bullet", "link", "image", 
    "blockquote", "code-block", "formula", "align", "video", "audio","color","background","emoji", "table",
  ];

  return (
    <div className=".advanced-blog-form-container">
    <div className="advanced-blog-form">
      <form onSubmit={handleSubmit}>
        <h1>Create Blog Post</h1>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleInputChange}
          placeholder="Enter Blog Title"
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={blogData.author}
          onChange={handleInputChange}
          placeholder="Enter Author Name"
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={blogData.date}
          onChange={handleInputChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={blogData.description}
          onChange={handleInputChange}
          placeholder="Enter Blog Description"
        ></textarea>

        <label>Hero Image</label>
        <input
          type="file"
          name="heroImage"
          accept="image/*"
          onChange={handleHeroImageChange}
        />

        <label>Blog Content</label>
        <div onClick={handleImageClick}>
          <ReactQuill
            theme="snow"
            value={blogData.content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            placeholder="Write your content here..."
          />
        </div>

        {controlsVisible && selectedImage && (
          <div className="image-controls">
            <button onClick={() => resizeImage("100%", true)}>Square 100%</button>
            <button onClick={() => resizeImage("75%", true)}>Square 75%</button>
            <button onClick={() => resizeImage("50%", true)}>Square 50%</button>
            <button onClick={() => resizeImage("25%", true)}>Square 25%</button>
            <button onClick={() => alignImage("left")}>Align Left</button>
            <button onClick={() => alignImage("center")}>Align Center</button>
            <button onClick={() => alignImage("right")}>Align Right</button>
            <button onClick={removeImage}>Remove Image</button>
          </div>
        )}

        <button type="submit">Save Blog</button>
      </form>
    </div>
    </div>
  );
};

export default BlogPostForm;
