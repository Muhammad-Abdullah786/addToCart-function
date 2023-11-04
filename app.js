console.log("conn");

let products = [
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"},
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"},
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"},
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"},
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"},
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"},
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"},
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"},
    {imgSrc : "./pic.jpg",title : "Macbook", description : "Premium Quality"}
];
products.forEach(function(product){
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let detail = document.createElement("p");

    img.src = product.imgSrc;
    img.alt = "Product Image";
    title.textContent = product.title
    detail.textContent = product.detail

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(detail);

    document.body.appendChild(card);



});
