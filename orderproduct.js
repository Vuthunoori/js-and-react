function orderproduct({name,quantity=1,price=10})
{
      let total=price*quantity;
      return `order summary:\norder:${name}\nquantity:${quantity}\n price:${price}\ntotal cost is:${total}`;
}
const example ={
    name:'chocolates',
    quantity:2,
    price:1200

};
console.log(orderproduct(example));
const example2={
    name:'fruits'
};
console.log(orderproduct(example2));