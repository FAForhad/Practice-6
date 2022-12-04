const loadCoctail = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json())
        .then(data => displayCoctale(data.drinks))
}
const displayCoctale = coctales => {
    coctales.forEach(coctale => {
        console.log(coctale)
        const cardContainer = document.getElementById('card-container');
        const cocktaleDiv = document.createElement('div');
        cocktaleDiv.classList.add('card')
        cocktaleDiv.classList.add('w-96')
        cocktaleDiv.classList.add('bg-base-100')
        cocktaleDiv.classList.add('shadow-xl')
        cocktaleDiv.classList.add('rounded-xl')
        cocktaleDiv.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${coctale.strDrinkThumb}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center py-10 px-10">
            <h2 class="card-title text-2xl py-5">${coctale.strDrink}</h2>
            <p>${coctale.strInstructions.slice(0, 100)}</p>
            <div class="card-actions">
            <button class="btn btn-outline btn-success">Success</button>
            </div>
        </div>
        `
        cardContainer.appendChild(cocktaleDiv)
    });
}
loadCoctail()