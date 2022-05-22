const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];
class GoodsItem {
  constructor({ title = '', price = 0 }) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
    <h3>${this.title}</h3> 
    <p>${this.price}</p>
  </div>
    `
  }
}

class GoodsList {
  constructor(list = []) {
    this.list = list;
  }
  render() {
    const goodsList = this.list.map(item => {
      const goodsItem = new GoodsItem(item);
      return  goodsItem.render();
    }).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
  }
//   sumPrice(){
//   const initialValue = 0;
//  const sumWithInitial = this.list.reduce(
//   (previousValue.price, currentValue.price) => previousValue.price + currentValue.price,
//   initialValue.price
//  );
// return sumWithInitial;
//   }

}

const goodsList = new GoodsList(goods);
goodsList.render();


//console.log(sumWithInitial);