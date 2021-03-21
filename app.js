const searchBTN = document.getElementById('search-btn');
const foodDiv = document.getElementById('meal')

searchBTN.addEventListener('click', getMealList);

function getMealList() {
    let searchInputText = document.getElementById('search-input').value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                
                <div onclick="displayFoodDetail('${meal.strMeal}')">
                <img src="${meal.strMealThumb}">
                <h5 class=" h5Name">${meal.strMeal}</h5>
                </div>
                
                `
                });
            }
            else {
                html = "sorry, we didn't find your search ";
                foodDiv.classList.add('notFound');
            }
            foodDiv.innerHTML = html;
        })
}

const displayFoodDetail = detail => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`)
        .then(res => res.json())
        .then(data => console.log(data))
}


























        // .then(data => {
        //     let html = "";
        //     if (data.meals) {
        //         data.meals.forEach(meal => {
        //             html += `
        //         <section class="bottom" data-id ="${meal.idMeal}">
        //         <div>
        //         <img class="rounded-top" src="${meal.strMealThumb}">
        //         <h5 class=" h5Name ">${meal.strMeal}</h5>
        //         </div>
        //          </section>
        //         `
        //     })
        // }
    // })
    // mealList.innerHTML = html ;



// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
//     .then(res => res.json())
//     .then(data => cookingInfo(data.meals))

// const cookingInfo = cooking => {
//     const cookingDiv = document.getElementById('food')

//     cooking.forEach(element => {

//         foodDiv = document.createElement('div')

//         foodInfo = `
//         <section class="bottom">
//         <div>
//         <img class="rounded-top" src="${element.strMealThumb}">
//         <h5 class=" h5Name ">${element.strMeal}</h5>
//         </div>
//         </section>
//         `

//         foodDiv.innerHTML = foodInfo;
//         cookingDiv.appendChild(foodDiv)
//     });
// }

