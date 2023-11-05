let products = [
    {imgSrc : "../assets/pic.jpg",title : "Macbook", description : "Premium Quality", price: '$89.99},
    {imgSrc : "../assets/iphone.jpg",title : "Iphone 99", description : "Premium Quality", price: '$89.99},
    {imgSrc : "../assets/sam.jpg",title : "Samsung 11.2", description : "Premium Quality", price: '$89.99},
    {imgSrc : "../assets/gaming.webp",title : "Gaming PC", description : "Premium Quality", price: '$89.99},
    {imgSrc : "../assets/lip.jpg",title : "lipistick", description : "Premium Quality", price: '$89.99},
    {imgSrc : "../assets/sampoo.jpg",title : "Shampoo", description : "Premium Quality", price: '$89.99},
    {imgSrc : "../assets/conditioner.jpg",title : "Conditioner", description : "Premium Quality", price: '$89.99},
    {imgSrc : "../assets/potato.svg",title : "Potato", description : "Premium Quality", price: '$89.99},
    {imgSrc : "../assets/apple.jpg",title : "Apple", description : "Premium Quality, price: '$89.99"}
];
let mainDiv = document.getElementsByClassName('main')[0];
products.forEach(function(product){
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let detail = document.createElement("p");
// i have to make addToCart button too
let addToCart = document.createElement("button");


    img.src = product.imgSrc;
    img.alt = "Product Image";
    img.style.width = '90%';
    img.style.height = '60%';
    title.textContent = product.title
    detail.textContent = product.description

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(detail);
    card.appendChild(addToCart);
    // let's add the attributes in the card
    card.setAttribute("class", 'product');
    addToCart.setAttribute("class", 'cart');
    addToCart.textContent = 'Add to cart';
    addToCart.addEventListener('click', ()=>{// onclick will not work
        addProduct(product)
    })


    mainDiv.appendChild(card);

    
});
let nameOfProduct = getElementsById('nameOfCart');
function addProduct(product){ // the reason product function will not work because it's inside the foreach function 
        console.log("added", product);


}