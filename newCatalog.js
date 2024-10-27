let products = [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "price": "$19.99",
    "image": "https://s.alicdn.com/@sc04/kf/H79a3c168cecc44ec89f9d84f2a5dd00bC.jpg_720x720q50.jpg",
    "description": "A comfortable wireless mouse with 2.4 GHz technology."
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard",
    "price": "$49.99",
    "image": "https://s.alicdn.com/@sc04/kf/H63a330cfd4794571b8d4be21dbdde9200.jpg?avif=close",
    "description": "A durable mechanical keyboard with RGB lighting."
  },
  {
    "id": 3,
    "name": "Noise Cancelling Headphones",
    "price": "$89.99",
    "image": "https://s.alicdn.com/@sc04/kf/H73971443f7944680be1b89d69d6ce85eu.jpg_720x720q50.jpg",
    "description": "High-quality noise cancelling headphones for immersive sound."
  },
  {
    "id": 4,
    "name": "USB-C Hub",
    "price": "$29.99",
    "image": "https://s.alicdn.com/@sc04/kf/H48a8cfc3a1244b0a95d2a0771cb04b637.jpg_720x720q50.jpg",
    "description": "A versatile USB-C hub with multiple ports for all your devices."
  },
  {
    "id": 5,
    "name": "1080p Webcam",
    "price": "$39.99",
    "image": "https://s.alicdn.com/@sc04/kf/Hdbf63ab0be9540d9acb6c6cfde5cc393N.jpg_720x720q50.jpg",
    "description": "A high-definition webcam with crystal clear video quality."
  }
]
    let showDiv = document.getElementById("display");
    let card = " ";
    products.forEach((product)=>{
      card +=`
      <div class="col-3 m-2">
          <div class="card" style="width: 18rem;" >
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.price}</p>
              <p class="card-text">${product.description}</p>
              <button class="btn btn-primary" onclick="buyNow('${product.name}')">Buy Now</button>
            </div>  
          </div>
      </div>
      `
      
      showDiv.innerHTML = card;
      
    })
    function buyNow(productName) {
      alert(`You have selected ${productName} for purchase.`);
  }
