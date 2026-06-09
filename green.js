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