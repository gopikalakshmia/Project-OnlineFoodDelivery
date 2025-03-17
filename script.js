$.ajax({
  url: "restaurent.json",
  method: "GET",
  datatype: "json",
  success: function (data) {
    data.forEach((restaurant) => {
      var restaurantCard= `  <div class="card m-5"  style="width: 20rem;">
                    <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
                    <div class="card-body">
                        <h5 class="card-title">${restaurant.name}</h5>
                        <p class="card-text">${restaurant.description}</p>
                         <a href=${"rest.html?restaurant="+encodeURIComponent(restaurant.id)} class="btn btn-primary">View Details</a>
                    </div>
                </div>`;
                $('#restaurant-list').append(restaurantCard);
    });
   
  },
  error: function (error) {
   $('#restaurant-list').html('<p>The data is not loaded...Error ocured....</p>')
  },
});