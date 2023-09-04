const addproduct=()=>{
const productField=document.getElementById('product')
const quantityField=document.getElementById('quantity')
const product=productField.value ;
const quantity=quantityField.value ;
productField.value=''
quantityField.value=''
console.log(product,quantity);

displayProduct(product,quantity)
saveProductLocalStorage(product,quantity)
}


const displayProduct =(product,quantity)=>{
const productContainer=document.getElementById('product-container')
const li=document.createElement('li')
li.innerText=`${product} , ${quantity} `
productContainer.appendChild(li)
}

const getStoredShopingCart=()=>{
let cart={};
const storeCart=localStorage.getItem('cart');
if(storeCart){
  cart=JSON.parse(storeCart)
}
return cart;
}

const saveProductLocalStorage = (product, quantity) => {
  const cart = getStoredShopingCart();
  cart[product]=quantity
 
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShopingCart();
  for (const product in savedCart) {
  const quantity=savedCart[product];
  displayProduct(product,quantity)
  }
}

displayProductFromLocalStorage();

