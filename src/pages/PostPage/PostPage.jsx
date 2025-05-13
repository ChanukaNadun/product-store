import React, { useState, useEffect, useRef } from 'react'
import axios from "axios";
import "./PostPage.css";

function PostPage() {

const [posts, setPosts] = useState([]);
const [images, setImages] = useState([]);
const [combinedData, setCombinedData] = useState([]);
const scrollRef = useRef(null);

useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        setPosts(response.data.slice(10, 20));
        console.log("post response",response.data.slice(10, 20));
    })
    .catch((error) => {
        console.log(error);
    })
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setImages(response.data.slice(10, 20));
        console.log("image response", response.data.slice(10, 20));
      })
      .catch((error) => {
        console.log(error);
      });
},[]);

useEffect(() => {
  console.log("Updated posts:", posts);
}, [posts]);

useEffect(() => {
  console.log("Updated images:", images);
},[images]);

const merge = posts.map((post, index) => ({
    ...post,
    image: images[index] ? images[index].image : null,
  }));

  useEffect(() => {
    setCombinedData(merge);
  }, [posts, images]);

  useEffect(() => {
    console.log("Updated combined data:", combinedData);
  }, [combinedData]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container py-4 position-relative">
      <button
        onClick={() => scroll("left")}
        className="btn btn-scroll scroll-left d-none d-lg-block"
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="row g-4 scroll-container" ref={scrollRef}>
        {merge.map((item, index) => (
          <div
            className="card posts-card shadow-sm border-0 d-flex flex-column align-items-center text-center p-3"
            key={index}
          >
            <div className="post-image-container mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="post-image mb-3"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="badge bg-primary bg-opacity-10 text-primary mb-2">
              #{item.id}
            </div>
            <h4 className="card-title mb-2" title={item.title}>
              {item.title}
            </h4>
            <p className="card-text small text-muted mb-3">
              {item.body.slice(0, 80)}...
            </p>

            <button className="btn btn-outline-primary btn-sm mt-auto">
              Read More <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="btn btn-scroll scroll-right d-none d-lg-block"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}

export default PostPage
