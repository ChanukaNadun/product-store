import axios from "axios";

export const getNewProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("helloresponse", response.data.slice(0, 10));
        return response.data.slice(0, 10);
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}