import axios from "axios";

const baseapi = axios.create({
    baseURL : 'https://fakestoreapi.com'
})

export async function fetchProducts() {
    const {data} = await baseapi.get('/products');
    return data;
}
export async function searchProduct(query) {
    const {searchResult} = await baseapi.get(`/products/${query}`);
    return searchResult;
}

export async function getProducts(query) {
    if(!query) return await fetchProducts();
    return await searchProduct(query);
}