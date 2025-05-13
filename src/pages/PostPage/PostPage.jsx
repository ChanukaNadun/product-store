import React, { useState, useEffect, useRef } from "react";

import "./PostPage.css";
import { getNewProducts, getPosts } from "../../Services/secondPageService";

function PostPage() {
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [combinedData, setCombinedData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProducts = await getNewProducts();
        const resPosts = await getPosts();

        setCombinedData(
          resPosts.map((post, index) => ({
            ...post,
            image: resProducts[index]?.image || null,
          }))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


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

      <div className="scroll-container g-4 " ref={scrollRef}>
        {loading ? (
          <div></div>
        ) : (
          combinedData.map((item, index) => (
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
          ))
        )}
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

export default PostPage;
