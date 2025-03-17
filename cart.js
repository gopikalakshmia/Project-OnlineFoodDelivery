
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function buttonClick( restaurantId,itemName,itemPrice) {

    let restDetails = {
        id: restaurantId,
        orderName: itemName,
        orderPrice: itemPrice,
      };
    
      cart.push(restDetails);
      localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
      console.log(cart);
  }

  $(document).ready(function () {
    let cart=JSON.parse(localStorage.getItem('cart'))||[];
    console.log(cart);
    if(cart.length>0){
        let cartItem=cart.map((item)=>`<p>${item.orderName} ${item.orderPrice} </p>`)
        $('#cartDetails').html(cartItem);
    }
    else
    {
      $('#cartDetails').html(`<h1>Cart is Empty!!!!</h1>`);
    }
  })

