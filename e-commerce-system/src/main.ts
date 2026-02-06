import { Product } from "./models/Product.js";
import { fetchAPIData, products } from "./services/apiService.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { NetworkError, DataError } from "./utils/errorHandler.js";

const fetchButton = document.getElementById("fetchButton")!;
const productList = document.getElementById("productList")!;


fetchButton.addEventListener("click", function () {
  main();
});


async function main() {

  productList.innerHTML = "";
  try {
    await fetchAPIData();
  } catch (error) {
    if (error instanceof NetworkError) {
      console.log("Network Error", error.message);
    } else if (error instanceof DataError) {
      console.log("Data Error", error);
    } else {
      console.error("Unknown Error:", error);
    }
  }

  for (const product of products) {
    const item = new Product(
      product.id,
      product.title,
      product.category,
      product.price,
      product.discountPercentage
    );
    const productDetails = item.displayDetails();
    const priceAfterDiscount = item.getPriceWithDiscount().toFixed(2);
    const discountedAmount = calculateDiscount(item).toFixed(2);
    const calculatedTax = calculateTax(item).toFixed(2);

    renderProducts(
      productDetails,
      priceAfterDiscount,
      discountedAmount,
      calculatedTax
    );
    // console.log(productDetails);
    // console.log("Price after discount: " + item.getPriceWithDiscount().toFixed(2));
    // console.log("Discounted amount: " + calculateDiscount(item).toFixed(2));
    // console.log("Calculated Tax for the product: " + calculateTax(item).toFixed(2));
    // console.log("--------------------------");
  }
}

function renderProducts(
  productDetails: string[],
  priceAfterDiscount: string,
  discountedAmount: string,
  calculatedTax: string,
) {
  // Create a container for ONE product
  const ul = document.createElement("ul");
  ul.classList.add("product");

  productDetails.forEach((detail) => {
    const li = document.createElement("li");
    li.textContent = detail;
    ul.appendChild(li);
  });
  
  const discountedPrice = document.createElement("li");
  discountedPrice.textContent = "Price after discount: $" + priceAfterDiscount;
  ul.appendChild(discountedPrice);

  const discountAmount = document.createElement("li");
  discountAmount.textContent = "Discounted amount: $" + discountedAmount;
  ul.appendChild(discountAmount);

  const tax = document.createElement("li");
  tax.textContent = "Tax: $" + calculatedTax;
  ul.appendChild(tax);

  productList.appendChild(ul);
}
