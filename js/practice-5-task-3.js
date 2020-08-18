// Задача 5 - 3
// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.При вызове будет получать один аргумент -
//     начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// Write code under this line

const Storage = function (items) {
  this.items = items;
};

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (itemToAdd) {
  if (!(this.items.indexOf(itemToAdd) !== -1)) {
    this.items.push(itemToAdd);
  }
};

Storage.prototype.removeItem = function (itemToRemove) {
  if (this.items.indexOf(itemToRemove) !== -1) {
    this.items.splice(this.items.indexOf(itemToRemove), 1);
    return this.items;
  }
};

console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */