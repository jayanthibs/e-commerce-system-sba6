How you implemented TypeScript features and OOP principles.

I used TypeScript to make the code safer by checking data types and organizing it into modules. The Product class stores product details and has methods to calculate discounts and show information, keeping data and behavior together. Things like fetching data, calculating discounts, and tax are done in separate files, so each part has one job. This makes the code easy to understand, reuse, and maintain.

The challenges you encountered and how you overcame them.

I faced challenges with loading API data asynchronously, calculating product prices and discounts, and displaying multiple product details in the UI. I solved these by using async/await with custom error handling to safely fetch data, moving calculations and product-related methods into the Product class to keep code clean and reusable, and creating a modular renderProducts function to organize the UI. This approach made the code more reliable, maintainable, and easier to extend.

How you handled asynchronous operations and error management.

I handled asynchronous operations using async/await. The main function main() is marked async, and I awaited the API call to make sure the product data is fully loaded before processing it.

For error management, I created custom error classes (NetworkError and DataError) and wrapped the API call in a try/catch block. Inside the catch, I checked the error type with instanceof and logged appropriate messages. This approach ensures the program handles network issues or data problems gracefully without crashing.