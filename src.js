
let prodCategory = "";
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
            prodCategory = item.text.toLowerCase();
            displayProducts(prodCategory);
        });
    });

var mainData = "";

async function displayProducts(category) {
    

    switch(category) {
        
        case "homedecor" : 
            console.log("inside switch case 1");
            prodCategory = ["home-decoration", "lighting"];
            break;
        
        case "women's fashion" : 
            prodCategory = ["tops","womens-dresses","womens-shoes","womens-watches","womens-bags","womens-jewellery","",];
            break;
        
        case "men's fashion" : 
            prodCategory = ["mens-shirts","mens-shoes","mens-watches","sunglasses","","","",];
            break;
        
        case "" :
            
        default: 
            prodCategory = category;
            break;
        
    }
    console.log(mainData);

    let productsElem = document.getElementById("products");
    let html = "";
    let productData = "";

    console.log(document.getElementById("categoryButtons"));

    if(document.querySelectorAll('.nav-link').forEach(item => {if (item.clicked === true) {

        console.log("this is inside if loop !!");

        let partialData = await fetch('https://dummyjson.com/products?limit=100');
        mainData = await partialData.json();
        productData = mainData.products;
    }})) {

    } else {

    }
        Object.keys(productData).forEach(key => {
            let productImages = productData[key].images;
            divHtml = "";
            let liHtml = "";
            
            productImages.forEach(function(index) {return liHtml += 
                `<li data-target="#imgCarousel" data-slide-to="${index}"></li>`;
            });

            productImages.forEach(function(value, index) {return divHtml +=
                `<div class="carousel-item ${(index == 0)?"active":""}">
                    <img class="d-block w-100" src="${value}" alt="">
                </div>`
            });

            html += `
                    <div class="my-3 mx-3 card" style="width: 18rem;">
                        <div id="imgCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                            ${liHtml}
                            </ol>
                            <div class="carousel-inner">
                                ${divHtml}
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${productData[key].title}</h5>
                            <p class="card-text">${productData[key].description}</p>
                            <p>Price: Rs.<b id="productPrice">${productData[key].price}</b></p>
                            <button id="${key}" onclick="addToCard(this.id)" class="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>`;

            
            if (productData.length !== 0) {
                productsElem.innerHTML = html;
            }
            else {
                notesElm.innerHTML = `Nothing to show here, please contact the admin !!`;
            }
        });
}

displayProducts();