// creating class Product
export class Product{
    id: number;
    title: string;
    category: string;
    price: number;
    discountPercentage: number;

    constructor(id:number, title:string, category: string, price: number, discountPercentage: number){
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }

    displayDetails(): string{
         return `Product id: ${this.id} \ntitle: ${this.title} \nCategory: ${this.category} \nPrice: ${this.price} \nDiscount Percentage: ${this.discountPercentage}`;

    }

    getPriceWithDiscount(): number{

        return this.price -this.price * (this.discountPercentage/100);

    }

}