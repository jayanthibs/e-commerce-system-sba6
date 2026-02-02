import { Product } from "../models/Product.js";
export function calculateDiscount(product) {
    return product.price * (product.discountPercentage / 100);
}
