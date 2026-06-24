let allCategories = document.getElementById('all-categories')
async function categoriesList() {
    let res = await fetch('https://openapi.programming-hero.com/api/categories')
    let data = await res.json()
    console.log(data)

    let showCategory = data.categories
    console.log(showCategory)

    for(let category of showCategory){
        console.log(category.category_name)
        let btn = document.createElement('button')
        btn.className = 'btn btn-soft btn-primary w-full'
        btn.innerHTML = category.category_name
        allCategories.appendChild(btn)
    }
}
categoriesList()

let chooseTrees = document.getElementById('trees-container')
async function allPlants() {
    let res = await fetch("https://openapi.programming-hero.com/api/plants")
    let data = await res.json()
    console.log(data)

    let findPlants = data.plants
    console.log(findPlants)

    findPlants.forEach(plant => {
        let div = document.createElement('div')
        div.className = 'card bg-base-100 shadow-sm'
        div.innerHTML = `
        
                    <figure class="px-10 pt-10">
                        <img src=${plant.image}
                            alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">${plant.name}</h2>
                        <p>${plant.description}</p>
                        <div class="tree-price w-full flex justify-between">
                            <h3>Fruit Tree</h3>
                            <h3>500</h3>
                        </div>
                        <div class="card-actions w-full">
                            <button class="btn btn-primary w-full">Buy Now</button>
                        </div>
                    </div>
                
        `
        chooseTrees.appendChild(div)
    });
}
allPlants()