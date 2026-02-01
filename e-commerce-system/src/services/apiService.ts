export async function fetchAPIData(){
    try{

    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    console.log(data);
    const products = data.products;

    for(let product of products){
        console.log("id:"+ product.id, "title:"+product.title)
    }
    console.log(products.length);

    }
    catch (e) {
    console.log(e);
  }
}
fetchAPIData();