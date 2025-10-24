import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "./constants";

axios.defaults.baseURL = API_BASE_URL

export async function getCategories() {
    const response = await axios.get(API_ENDPOINTS.CATEGORIES)
    return response.data
}

export async function getProducts(currentPage) {
    const params = {
        limit: 12,
        skip: (currentPage - 1) * 12
    }

    const response = await axios.get(API_ENDPOINTS.PRODUCTS, { params })
    return response.data
}

export async function getProductById(id) {
    const response = await axios.get(`${API_ENDPOINTS.PRODUCTS_BY_ID}${id}`)
    return response.data
}

export async function getProductByCategory(category) {
    const response = await axios.get(`${API_ENDPOINTS.PRODUCTS_BY_CATEGORY}${category}`)
    return response.data
}
