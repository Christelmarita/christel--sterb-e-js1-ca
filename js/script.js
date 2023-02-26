const url = "https://bobsburgers-api.herokuapp.com/characters";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;
const resultsContainer = document.querySelector(".results");

async function getCharacter() {
    try {
        const response = await fetch(corsEnabledUrl);
        const data = await response.json();
        resultsContainer.innerHTML ="";

        data.forEach(function(bobsBurger) {
            resultsContainer.innerHTML += `<div class="data-results">
                                            <h2>${bobsBurger.name}</h2>
                                            <p>Gender: ${bobsBurger.gender}<p>
                                            <p>Occupation: ${bobsBurger.occupation}</p>
                                            <a href="details.html?id=${bobsBurger.id}">read more</a>
                                            </div>`
        })

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("Whoops, can´t retrieve any burgers");
    }
}

getCharacter();