import axios from "axios";

export const ApiUrlDev = "https://dev.yjoz.com/api/v5/";
export const ApiUrl = "https://api.yjoz.com/api/v5/"

export const endPoints = {
  get: {
    category: "get_available_categories",
    popularProducts: "get_popular_products",
    popularProductsByCategory: "get_popular_products_by_category",
  },
};

export const axiosClaint = axios.create({
  baseURL: `${ApiUrl}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const LongStaleTime = 10000000000;
