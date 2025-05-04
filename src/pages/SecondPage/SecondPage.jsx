import React, { useState, useEffect } from "react";
import "./SecondPage.css";
import Card from "../../components/Card/Card";
import { getNewProducts } from "../../Services/secondPageService";

function SecondPage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getNewProducts();
        console.log("res", res);
        setPost(res);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <div className="grid grid-cols-4 gap-4 auto-rows-[200px] p-4">
        {post.slice(0,5).map((item, index) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-2xl shadow-lg ${
              index % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}

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
                  href="#"
                  className="btn btn-light btn-lg px-4 py-2 rounded-pill"
                >
                  View Collections
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Right Top Cards --> */}
          {/* <div className="col-md-6">
            <div className="row g-3">
              <div className="col-md-6 col-sm-12">
                <div className="card bg-dark text-white h-100">
                  <img
                    src={post[1]?.image}
                    className="card-img"
                    alt={post[1]?.title}
                  />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center">
                    <h5 className="card-title">{post[1]?.title}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="card bg-dark text-white h-100">
                  <img
                    src={post[2]?.image}
                    className="card-img"
                    alt={post[2]?.title}
                  />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center">
                    <h5 className="card-title">{post[2]?.title}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="card bg-dark text-white h-100">
                  <img
                    src={post[3]?.image}
                    className="card-img"
                    alt={post[3]?.title}
                  />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center">
                    <h5 className="card-title">{post[3]?.title}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="card bg-dark text-white h-100">
                  <img
                    src={post[4]?.image}
                    className="card-img"
                    alt={post[4]?.title}
                  />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center">
                    <h5 className="card-title">{post[4]?.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

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
                      className="col-md-4 col-10 flex-shrink-0 position-relative" // col-10 gives width on mobile
                      style={{ minWidth: "250px" }} // Ensures consistent card width in scroll
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
                            href="#"
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

      <div className="container py-3">
        {post && (
          <div className="row g-4">
            {post?.map((product, index) => (
              <Card product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SecondPage;
