/*
    Tasks:

        Create array of product objects {name, price}, apply discount, sort by price.
        Mini-project: "Product Catalog Data"

        Hard-code 5-10 products. Use console or simple UI to list, sort, filter products.
        Focus: Manipulating and traversing structured data.
*/

const products = [
  { name: "Laptop", price: 1200, discount: 0.1 },
  { name: "Phone", price: 800, discount: 0.05 },
  { name: "Headphones", price: 100, discount: 0.15 },
  { name: "Monitor", price: 300, discount: 0.2 },
];

const discountedProducts = products.map((product) => {
  const discountedPrice = product.price - product.price * product.discount;
  return { ...product, discountedPrice: discountedPrice.toFixed(2) };
});

const sortedProducts = discountedProducts.sort(
  (a, b) => a.discountedPrice - b.discountedPrice
);

console.log("Products sorted by discounted price:");
sortedProducts.forEach((p) => {
  console.log(`${p.name}: $${p.discountedPrice}`);
});
