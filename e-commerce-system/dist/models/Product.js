// creating class Product
export class Product {
    id;
    title;
    category;
    price;
    discountPercentage;
    constructor(id, title, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        // return `Product id: ${this.id} \ntitle: ${this.title} \nCategory: ${this.category} \nPrice: ${this.price} \nDiscount Percentage: ${this.discountPercentage}`;
        return [
            `ID: ${this.id}`,
            `Title: ${this.title}`,
            `Category: ${this.category}`,
            `Price: $${this.price}`,
            `Discount Percentage: ${this.discountPercentage}`
        ];
    }
    getPriceWithDiscount() {
        return this.price - this.price * (this.discountPercentage / 100);
    }
}
