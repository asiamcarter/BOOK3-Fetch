
fetch("http://localhost:8088/food")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(food => {
        let foodAsHTML = foodFactory(food)
        addFoodToDom(foodAsHTML);
fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
.then(response => response.json())
.then(productInfo => { 

let ingredients = productInfo.product.ingredients_text;
let country = productInfo.product.countries_heirarchy;
let calories = productInfo.product.nutriments.energy_100g
let fat = productInfo.product.nutriments.fat_serving;
let sugar = productInfo.product.nutriments.sugars_serving;





    })
})
})



let foodFactory = (add) => {
    return `
    <div class = "foodPart">
    <h3>${add.name}</h3>
    <p>${add.type}</p>
    <p>${add.ethnicity}</p> 
   
    
    </div> 
    `
}

let addFoodToDom = (foods) => {
    let container = document.querySelector(".foodList");
    container.innerHTML += foods;
    document.body.appendChild(container);

}









