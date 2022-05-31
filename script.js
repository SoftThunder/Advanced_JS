const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];
const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
const GET_BASKET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'
function service(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onload = () => {
    callback(JSON.parse(xhr.response))
  }
}

class GoodsItem {
  constructor({ product_name = '', price = 0 }) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
    <h3>${this.product_name}</h3> 
    <p>${this.price}</p>
  </div>
    `
  }
}

class GoodsList {
  items = [];
  fetchGoods(callback) {
    service(GET_GOODS_ITEMS, (data) => {
      this.items = data;
      callback()
    });
  }

  render() {
    const goodsList = this.items.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    }).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
  }
  sumPrice() {
    return this.list.reduce((prev, { price }) => prev + price, 0)

  }
}
class BasketGoods {
  items = [];
  fetchGoods(callback = () => { }) {
    service(GET_BASKET_GOODS_ITEMS, (data) => {
      this.items = data.contents;
      callback()
    });
  }
}

const goodsList = new GoodsList();
goodsList.fetchGoods(() => {
  goodsList.render();
});

const basketG = new BasketGoods();
basketG.fetchGoods();

