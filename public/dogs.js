// Dogs API
const Url = "https://api.thedogapi.com/v1"

const fetchBreeds = async () => {
    const response = await fetch(Url + "/breeds");
    const dogBreeds = await response.json();
    populateDogSelect(dogBreeds)
}

const populateSelect = (breeds) => {
    const select = document.querySelector(".breed-select");
    const breedOptions = breeds.map(breed => {
        const option = document.createElement("option");
        option.text = breed.name;
        option.value = breed.id;
        return option;
    })

    breedOptions.forEach(breedOption => {
        select.appendChild(breedOption);
    })
}

const createDescriptionEntry = ({label, value}) => {
    const descriptionTerm = document.createElement("dt");
    descriptionTerm.textContent = label;
    const descriptionValue = document.createElement("dd")
    const parentElement = document.querySelector("#dog-description")
    parentElement.appendChild(descriptionTerm);
    parentElement.appendChild(descriptionValue);
}

const fillDogDescription = ({bred_for: bredFor, bred_group: bredGroup, name, temperament, life_span: lifeSpan, origin, height, weight}) => {
    createDescriptionEntry({
        label: "Name",
        value: name
    })

    createDescriptionEntry({
        label: "Bred for",
        value: bredFor
    })

    createDescriptionEntry({
        label: "Temperament",
        value: temperament
    })

    createDescriptionEntry({
        label: "Life Span",
        value: lifespan
    })

    createDescriptionEntry({
        label: "Origin",
        value: origin
    })

    createDescriptionEntry({
        label: "Height [cm]",
        value: height.metric
    })

    createDescriptionEntry({
        label: "Weight [kg]",
        value: temperament.metric
    })
}

const getDogByBreed = async (breedId) => {
    const [ data ] = await fetch(Url + "/images/search?include_breed-1&breed + breedId").then((data) => data.json())
    const {url: imageUrl, breeds} = data;
    fillDogImage(imageUrl);
    fillDogDescription(breeds[0]);
}

const changeDog = () => {
    console.log(event.target.value);
    getDogByBreed(event.target.value);
}

fetchBreeds();

/* 
Dogs Array

const fetchDogBreeds = async () => {
    // FETCHing Data from API
    fetch("https://api.thedogapi.com/v1/breeds")
    // Resolved Promise, Transforming root of stream to JSON
    .then(data => data.json())
    .then(doggos => console.log(doggos))
    // Rejected Promise
    .catch(e => console.error("Promise rejected",e));
}

fetchDogBreeds();

// Dogs API
$("#auto-complete").click(function(event){
    event.preventDefault();

    var breedSearch = $("#display-results").val().trim();

    var queryUrl = "https://api.thedogapi.com/v1/breeds/search?q=" + breedSearch

    // ajax Request
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            "user-key": "0c17d6e4-b144-4ac1-b988-5d422549a1ff",
        }
    }).then(function(response) {
        $("results-container").empty();

        // Result Variables
        var name = response.name;
        var weight = response.weight.imperial;
        var height = response.height.imperial;
        var bred_for = response.bred_for;
        var life_span = response.life_span;
        var temperament = response.temperament;

        // Results appearing on HTML
        var html_results = $("<h6>").html(
            "Name: " + name + "<br>" +
            "Weight: " + weight + "<br>" +
            "Height: " + height + "<br>" +
            "Bred for: " + bred_for + "<br>" +
            "Life span: " + life_span + "<br>" +
            "Temperament: " + temperament + "<br>"
        );

        console.log(html_results);

        var result_image = $("<img>").attr("src", image).addClass("result-image")

        $("#results-container").append(html_results, result_image);

    });

});
*/