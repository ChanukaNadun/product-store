import React, { useState, useEffect } from "react";
import "./SecondPage.css";
import Card from "../../components/Card/Card";
import { getProducts } from "../../Services/secondPageService";

function SecondPage() {
  const [post, setPost] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        console.log("res", res);
        setPost(res);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, []);

  const productShow = () => {
    setShowAll((prev) => !prev);
  };

  const displayedPosts = showAll ? post : post?.slice(0, 12);
 
  const filteredPosts = displayedPosts?.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="container py-5">
        <div className="row g-3">
          <div className="col-md-6 col-sm-12">
            <div className="card bg-dark text-white h-100 featured-card p-4 gradient-overlay">
              <img
                src={post[0]?.image}
                className="card-img h-100 object-fit-cover"
                alt={post[0]?.title}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title display-6 fw-bold mb-2">
                  {post[0]?.title}
                </h5>
                <p className="card-text mb-4">{post[0]?.description}</p>
                <a
                  href="/"
                  className="btn btn-light btn-lg px-4 py-2 rounded-pill"
                >
                  View Collections
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="row g-3 h-100">
              {/* Scrollable row wrapper on mobile */}
              <div
                className="d-md-grid d-flex overflow-auto flex-nowrap gap-3 pb-2"
                style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="col-md-4 col-10 flex-shrink-0 position-relative"
                    style={{ minWidth: "250px" }}
                  >
                    <div className="card bg-dark text-white h-100 secondary-card">
                      <img
                        src={post[i]?.image}
                        className="card-img h-100 object-fit-cover"
                        alt={post[i]?.title}
                      />
                      <div className="card-img-overlay d-flex align-items-end p-3 gradient-overlay-sm">
                        <h5 className="card-title fs-5 mb-0">
                          {post[i]?.title}
                        </h5>
                      </div>
                      <div className="card-hover-content">
                        <a
                          href="/"
                          className="btn btn-outline-light btn-sm rounded-pill"
                        >
                          View <i className="bi bi-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm">
        <div className="container-fluid d-flex justify-content-end">
          <div
            className="search-container"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                className="form-control border-start-0 rounded-end shadow-sm"
                type="search"
                placeholder="Search posts by title or description..."
                aria-label="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="container py-3">
        {post && (
          <>
            <div className="row g-4">
              {filteredPosts?.map((product, index) => (
                <Card product={product} index={index} />
              ))}
            </div>

            {post.length > 12 && (
              <div className="text-center mt-4 pb-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={productShow}
                >
                  {showAll ? "Hide" : "See All"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default SecondPage;
