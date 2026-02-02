import { Product } from "../models/Product.js";
import { NetworkError, DataError } from "../utils/errorHandler.js";
export let products;
export async function fetchAPIData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new NetworkError(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        //console.log(data);
        products = data.products;
        // for(let product of products){
        //     console.log("id:"+ product.id, "title:"+product.title)
        // }
        // console.log(products.length);
    }
    catch (error) {
        if (error instanceof NetworkError) {
            console.log("Network Error", error.message);
        }
        else if (error instanceof DataError) {
            console.log("Data Error", error);
        }
        else {
            console.error("Unknown Error:", error);
        }
    }
}
//fetchAPIData();
