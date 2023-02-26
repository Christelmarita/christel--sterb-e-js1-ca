const detailContainer = document.querySelector(".result-detail");
const goBack = document.querySelector(".back")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://bobsburgers-api.herokuapp.com/characters/${id}`;
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

goBack.onclick = () => {
    history.back();
};

async function getCharacter() {
    try {
        const response = await fetch(corsEnabledUrl);
        const details = await response.json();

        createHTML(details);
        document.title = `${details.name}`

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("Whoops, can´t retrieve any burgers");
    }
}

getCharacter();

function createHTML(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <h2>${details.occupation}<h2>
                                <p>Gender: ${details.gender}</p>
                                <p>Hair color: ${details.hairColor}</p>
                                `;
}