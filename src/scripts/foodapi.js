


function foodHTML(name, type, ethnicity) {
const section = document.createElement("section")
const headSection = document.querySelector(".foodList");
headSection.appendChild(section); 

const h1 = document.createElement("h1")
const p1 = document.createElement("p")
const p2 = document.createElement("p")

headSection.appendChild(h1)
headSection.appendChild(p1)
headSection.appendChild(p2)

h1.textContent = name
p1.textContent = type
p2.textContent = ethnicity
}



fetch("http://localhost:8088/food")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(food => {
        foodHTML(food.name, food.type, food.ethnicity)
    })
})