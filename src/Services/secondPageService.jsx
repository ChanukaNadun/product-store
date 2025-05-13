import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("Products Response", response.data.slice(0, 16));
        return response.data.slice(0, 16);
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export const getNewProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log("New Products response", response.data.slice(10,20));
    return response.data.slice(10,20);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("Posts Response", response.data.slice(10, 20));
    return response.data.slice(10, 20);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};