// // side panel
// function openNav() {
//     let sidePanel = document.getElementById('mySidepanel')
//     sidePanel.style.width = "356px";
//     sidePanel.style.height = "756px";
    
//   }
  
//   function closeNav() {
//     document.getElementById("mySidepanel").style.width = "0";
//   }







// let products = [
//     {imgSrc : "../assets/pic.jpg",title : "Macbook", description : "Premium Quality", price: 99, quantity:0},
//     {imgSrc : "../assets/iphone.jpg",title : "Iphone 99", description : "Premium Quality", price: 99, quantity:0},
//     {imgSrc : "../assets/sam.jpg",title : "Samsung 11.2", description : "Premium Quality", price: 99, quantity:0},
//     {imgSrc : "../assets/gaming.webp",title : "Gaming PC", description : "Premium Quality", price: 99, quantity:0},
//     {imgSrc : "../assets/lip.jpg",title : "lipistick", description : "Premium Quality", price: 99, quantity:0},
//     {imgSrc : "../assets/sampoo.jpg",title : "Shampoo", description : "Premium Quality", price: 99, quantity:0},
//     {imgSrc : "../assets/conditioner.jpg",title : "Conditioner", description : "Premium Quality", price: 99, quantity:0},
//     {imgSrc : "../assets/potato.svg",title : "Potato", description : "Premium Quality", price: 99, quantity:0},
//     {imgSrc : "../assets/apple.jpg",title : "Apple", description : "Premium Quality", price : 9, quantity:09}
// ];
// let cartItem = [];
// let mainDiv = document.getElementsByClassName('main')[0];
// products.forEach(function(product){
   
//     let card = document.createElement("div");
//     let img = document.createElement("img");
//     let title = document.createElement("h2");
//     let detail = document.createElement("p");
//     // i have to make addToCart button too
//     let addToCart = document.createElement("button");
//     let priceNode = document.createElement("p");
    
//     img.src = product.imgSrc;
//     img.alt = "Product Image";
//     img.style.width = '90%';
//     img.style.height = '60%';
//     title.textContent = product.title
//     detail.textContent = product.description
//     priceNode.innerHTML = 'Price: ' + product.price;
//     // card.appendChild(priceNode);
//     card.appendChild(img);
//     card.appendChild(title);
//     card.appendChild(detail);
//     card.appendChild(addToCart);
//     card.appendChild(priceNode)
//     // let's add the attributes in the card
//     priceNode.setAttribute('class', 'priceTag')
//     card.setAttribute("class", 'product');
//     addToCart.setAttribute("class", 'cart');
//     addToCart.textContent = 'Add to cart';
//     addToCart.addEventListener('click', ()=>{// onclick will not work
//         addProduct(product)
        
//     })
//     // i will use JSON to put the products in the cart and in the local storage

    
    
//     mainDiv.appendChild(card);
    
    
// });
// let newproductAdded = document.getElementById('mySidepanel')
// // let productAvailable = true
// // if (product.length === 0) {
// //     let availableProducts = document.getElementById('noProductMessage')
// //     availableProducts.style.display = 'block';
// //     productAvailable = false;
// // }
// function addProduct(product){
//     // if addToCart is false then show span that tell there is not product available
//     // if (!productAvailable) {
//         //     let availableProducts = document.getElementById('noProductMessage')
//         //     availableProducts.style.display = 'none';
//         //     productAvailable = true
//         // }else{ 
//             cartItem.push(product)
            
//     let priceCart = document.createElement('span')
//     let cartDiv = document.createElement("ul");
//     cartDiv.setAttribute("class", 'cartProductBox');
//     let img = document.createElement("img");
//     img.src = product.imgSrc;
//     img.alt = "Cart Product Image";
//     img.style.width = '40px';
//     img.style.height = '40px';
//     img.setAttribute("class", 'cartImg')

//     let title = document.createElement("li");
//     title.textContent = product.title;

//     cartDiv.appendChild(img) 
//     cartDiv.appendChild(title);
//     cartDiv.appendChild(priceCart) 
    
//     newproductAdded.appendChild(cartDiv);
//     // localStorage.setItem('cart items', JSON.stringify(cartItem))
//     console.log("Product added: ", product);
//     }


// side panel
function openNav() {
    let sidePanel = document.getElementById('mySidepanel')
    sidePanel.style.width = "356px";
    sidePanel.style.height = "756px";
}
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

let products = [
    {imgSrc : "../assets/pic.jpg",title : "Macbook", description : "Premium Quality", price: 99, quantity:0},
        {imgSrc : "../assets/iphone.jpg",title : "Iphone 99", description : "Premium Quality", price: 99, quantity:0},
        {imgSrc : "../assets/sam.jpg",title : "Samsung 11.2", description : "Premium Quality", price: 99, quantity:0},
        {imgSrc : "../assets/gaming.webp",title : "Gaming PC", description : "Premium Quality", price: 99, quantity:0},
        {imgSrc : "../assets/lip.jpg",title : "lipistick", description : "Premium Quality", price: 99, quantity:0},
        {imgSrc : "../assets/sampoo.jpg",title : "Shampoo", description : "Premium Quality", price: 99, quantity:0},
        {imgSrc : "../assets/conditioner.jpg",title : "Conditioner", description : "Premium Quality", price: 99, quantity:0},
        {imgSrc : "../assets/potato.svg",title : "Potato", description : "Premium Quality", price: 99, quantity:0},
        {imgSrc : "../assets/apple.jpg",title : "Apple", description : "Premium Quality", price : 9, quantity:0}
];

let cartItem = JSON.parse(localStorage.getItem('cartItems')) || [];
let mainDiv = document.getElementsByClassName('main')[0];

products.forEach(function(product){
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let detail = document.createElement("p");
    let addToCart = document.createElement("button");
    let priceNode = document.createElement("p");
    
    img.src = product.imgSrc;
    img.alt = "Product Image";
    img.style.width = '90%';
    img.style.height = '60%';
    title.textContent = product.title
    detail.textContent = product.description
    priceNode.innerHTML = 'Price: ' + product.price;
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(detail);
    card.appendChild(addToCart);
    card.appendChild(priceNode)
    priceNode.setAttribute('class', 'priceTag')
    card.setAttribute("class", 'product');
    addToCart.setAttribute("class", 'cart');
    addToCart.textContent = 'Add to cart';
    addToCart.addEventListener('click', ()=>{
        addProduct(product)
    })
    mainDiv.appendChild(card);
});

let newproductAdded = document.getElementById('mySidepanel')

function addProduct(product){
    let existingProduct = cartItem.find(item => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cartItem.push(product);
    }
    
    let priceCart = document.createElement('span')
    let cartDiv = document.createElement("ul");
    cartDiv.setAttribute("class", 'cartProductBox');
    let img = document.createElement("img");
    img.src = product.imgSrc;
    img.alt = "Cart Product Image";
    img.style.width = '40px';
    img.style.height = '40px';
    img.setAttribute("class", 'cartImg')

    let title = document.createElement("li");
    title.textContent = product.title;

    cartDiv.appendChild(img) 
    cartDiv.appendChild(title);
    cartDiv.appendChild(priceCart) 
    
    newproductAdded.appendChild(cartDiv);
    
    // Store the cartItem in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItem));
    
    console.log("Product added: ", product);
}

// Load cart items from local storage when the page loads
window.onload = function() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach(item => {
        // Code to display each item in the cart
        // This will depend on your specific UI
    });
}
