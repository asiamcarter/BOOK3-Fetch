
fetch("http://localhost:8088/food")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(food => {
        const foodAsHTML = foodFactory(food)
        addFoodToDom(foodAsHTML)
        console.log(foodFactory(food));
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







