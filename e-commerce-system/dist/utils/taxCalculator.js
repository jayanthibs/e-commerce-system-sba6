import { Product } from "../models/Product.js";
export function calculateTax(product) {
    if (product.category === "groceries")
        return product.getPriceWithDiscount() * 0.03;
    else
        return product.getPriceWithDiscount() * 0.0475;
}
