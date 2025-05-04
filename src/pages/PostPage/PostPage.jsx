import React, { useState, useEffect} from 'react'
import axios from "axios";
import "./PostPage.css";

function PostPage() {

const [posts, setPosts] = useState([]);
const [images, setImages] = useState([]);
const [combinedData, setCombinedData] = useState([]);

useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        setPosts(response.data.slice(0, 10));
        console.log("post response",response.data.slice(0, 10));
    })
    .catch((error) => {
        console.log(error);
    })
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setImages(response.data.slice(0, 10));
        console.log("image response", response.data.slice(0, 10));
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

  

  return (
    <div className="container py-3">
      <div className="row g-4">
        {merge.map((item, index) => (
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card posts-card shadow-sm border-0 h-100 d-flex flex-column align-items-center text-center p-3 ">
              <img
                src={item.image}
                alt={item.title}
                className="post-image mb-3"
              />
              <div className='fw-bold text-primary'> {item.id}</div>
              <h4 className="card-title">{item.title}</h4>
              <div className="card-text small text-muted"> {item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage
