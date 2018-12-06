
fetch("http://localhost:8088/food")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(food => {
        
fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
.then(response => response.json())
.then(productInfo => { 

food.ingredients = productInfo.product.ingredients_text;
food.country = productInfo.product.countries;
food.calories = productInfo.product.nutriments.energy_serving;
food.fat = productInfo.product.nutriments.fat_serving;
food.sugar = productInfo.product.nutriments.sugars_serving;
let foodAsHTML = foodFactory(food)
addFoodToDom(foodAsHTML);



    })
})
})



let foodFactory = (foodObject) => {
    let HTMLfoodSection = ( `
    <div class = "foodPart">
    <h3>${foodObject.name}</h3>
    <p>${foodObject.type}</p>
    <p>${foodObject.ethnicity}</p> 
    <p>${foodObject.ingredients}</p>
    <p>Sugars: ${foodObject.sugar}</p>
    <p>Calories: ${foodObject.calories}</p>
    <p>Fat: ${foodObject.fat}</p>
 
   
    
    </div> 
    `)
    return HTMLfoodSection;
}

let addFoodToDom = (foods) => {
    let container = document.querySelector(".foodList");
    container.innerHTML += foods;
   

}







