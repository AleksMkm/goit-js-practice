/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  isProductInCart(addedProduct) {
    const productsInCart = [];
    for (const element of this.items) {
      productsInCart.push(element.name);
    }
    return productsInCart.includes(addedProduct.name);
  },
  add(product) {
    if (!this.isProductInCart(product)) {
      this.items.push(product);
      product.quantity = 1;
    } else {
      this.increaseQuantity(product.name);
    }
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === productName) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const product of this.items) {
      total += product.price * product.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const product of this.items) {
      if (product.name === productName) {
        product.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const product of this.items) {
      if (product.name === productName) {
        product.quantity -= 1;
        if (product.quantity < 0) {
          product.quantity = 0;
        }
      }
    }
  },
};

console.log('Empty cart');
console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.log('1 apple, 2 lemons, 1 strawberry added');
console.table(cart.getItems());

console.log('apples removed');
cart.remove('🍎');
console.table(cart.getItems());

console.log('cart cleared');
cart.clear();
console.table(cart.getItems());

console.log('1 apple, 2 lemons, 1 strawberry added');
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
console.table(cart.getItems());

console.log('apple qty increased by 1');
cart.increaseQuantity('🍎');
console.table(cart.getItems());

console.log('lemon qty increased by 3');
cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());

console.log('total price - should be 210');
console.log('Total: ', cart.countTotalPrice());
