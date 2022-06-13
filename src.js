// console.log("I am inside src.js file");

let prodCategory = "";
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
            // console.log("category clicked");
            prodCategory = item.text.toLowerCase();
            displayProducts(prodCategory);
        });
    });
/* 
function getProducts(){
    console.log(" inside getProducts function !! ");
    url = "https://dummyjson.com/products?limit=10";

    fetch(url).then((response)=>{
        console.log("inside first then ");
        return response.json();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
        console.log(data.products[1].category);

        document.getElementById("productTitle").innerText = data.products[1].title;
        document.getElementById("productDesc").innerText = data.products[1].description;
        document.getElementById("productPrice").innerText = data.products[1].price;

    })
}*/

var mainData = "";
/* 
async function getData() {
    let partialData = await fetch('https://dummyjson.com/products?limit=100');
    console.log(partialData);
    mainData = await partialData.json();
    console.log("inside getData & data is " + mainData);
}
 */
// mainData = getData();


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
            // here some code when no button is clicked
            
        default: 
            prodCategory = category;
            break;
        
    }
    console.log(mainData);

    let productsElem = document.getElementById("products");
    let html = "";
    let productData = "";

    console.log(document.getElementById("categoryButtons"));

    if(document.querySelectorAll('.nav-link').forEach(item.clicked === true)) {

        console.log("this is inside if loop !!");

        let partialData = await fetch('https://dummyjson.com/products?limit=100');
        mainData = await partialData.json();
        productData = mainData.products;
    } else {

    }
        Object.keys(productData).forEach(key => {
            // console.log("this is inside data.products");
            let productImages = productData[key].images;
            // console.log(`this is image arr :::  ${imageArr}`);
            divHtml = "";
            let liHtml = "";
            
            productImages.forEach(function(index) {return liHtml += 
                `<li data-target="#imgCarousel" data-slide-to="${index}"></li>`;
            });

            // console.log(liHtml);

            productImages.forEach(function(value, index) {return divHtml +=
                `<div class="carousel-item ${(index == 0)?"active":""}">
                    <img class="d-block w-100" src="${value}" alt="">
                </div>`
            });
            // console.log(str2);

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
            // console.log(html);

            
            if (productData.length !== 0) {
                productsElem.innerHTML = html;
            }
            else {
                notesElm.innerHTML = `Nothing to show here, please contact the admin !!`;
            }
        });
}




// displayProducts();