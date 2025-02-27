// const BASE_URL= "https://api.escuelajs.co/api/v1/products"
const BASE_URL = "https://dummyjson.com/products";

const fetchAllProducts = async () => {
    try {
        const res = await fetch(BASE_URL);
        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        return data.products; // Adjust this based on the actual structure of the response
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};



const fetchProductById = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        return data.product; // Adjust this based on the actual structure of the response
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
}

export default { fetchAllProducts, fetchProductById };