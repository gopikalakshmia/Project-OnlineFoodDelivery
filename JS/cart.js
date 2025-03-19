
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function buttonClick( restaurantId,itemName,itemPrice) {

    let restDetails = {
        id: restaurantId,
        orderName: itemName,
        orderPrice: itemPrice,
        Qty:1
      };
    if(cart.findIndex(item=>item.orderName===itemName)===-1){
        cart.push(restDetails);
    }
    else
    {
        cartIndex=cart.findIndex(item=>item.orderName===itemName);
        cart[cartIndex].Qty=cart[cartIndex].Qty+1;
    }
     
      localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
      console.log(cart);
  }

//Increment QTY
  function addQty(index,value){

if(cart[index].Qty>=1){
    cart[index].Qty=cart[index].Qty+Number(value);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    document.getElementById(`qtyspan-${index}`).innerHTML=cart[index].Qty;
}
if(cart[index].Qty===0){
    cart=cart.filter(item=>item.orderName!==cart[index].orderName);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    location.reload();
}
     // Save to localStorage
     
      console.log(cart);
  }
function rendercart(){

}

  $(document).ready(function () {
let user=JSON.parse(localStorage.getItem('user-Login'))||{login:false};
console.log(user);
if(user.login){

  let cart=JSON.parse(localStorage.getItem('cart'))||[];
  console.log(cart);
  if(cart.length>0){
      let cartItem = `
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
             <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          ${cart.map((item,index) => `
            <tr>
              <td>${item.orderName}</td>
              <td>$${item.orderPrice}</td>
              <td><button onclick="addQty(${index},-1)">-</button> 
              <span id="qtyspan-${index}">${item.Qty} </span>
             <button onclick="addQty(${index},1)">+</button> 
           <td>${(item.orderPrice)*item.Qty }</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
     
      <h2>Total Price: ${cart.reduce((acc,item)=>acc+(item.orderPrice*item.Qty),0).toFixed(2)}</h2>
      <a type="button" href="./payment.html" class="btn btn-success p-2">Pay</a>
    `;
      $('#cartDetails').html(cartItem);
  }
  else
  {
    $('#cartDetails').html(`<h1>Cart is Empty!!!!</h1>`);
  }
}
else{
  $('#cartDetails').html('<h2>Please Login......</h2>');
}

   
  })

