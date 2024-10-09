import data from "../data.json";
import { Cart } from "./entities/cart";
import { Product } from "./entities/products";

for (const product of data) {
  new Product(
    product.name,
    product.price,
    product.category,
    product.image.desktop
  );
}
const banana = new Product("Banana", 10, "Fruta", "http://image.com");
const uva = new Product("uva", 5, "Fruta", "http://image.com");
  
banana.incrementQuantity();
banana.incrementQuantity();
banana.incrementQuantity();
uva.incrementQuantity();
uva.incrementQuantity();
// console.log(Cart.products);
// console.log(Cart.products.length);
console.log(Cart);
//Cart.removeProduct(banana);
console.log(Cart);
  
const product2 = new Product(
  data[1].name,
  data[1].price,
  data[1].category,
  data[1].image.desktop
);

const cart = new Cart();

// cart.addToCart(product1);
// cart.addToCart(product1);

// console.log(cart.products);
// console.log(cart.products.length);
// console.log(cart.total);