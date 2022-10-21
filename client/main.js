const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune-button")
const travelBtn = document.getElementById("travel-spot")
const planetBtn = document.getElementById("create-planet")
const form = document.querySelector('form')
const bigPlanetBox = document.getElementById('planet-section')
const baseURL = `http://localhost:4004/api/planets`

const planetsCallback = ({ data: planets }) => showPlanets(planets)
const errCallback = err => console.log(err.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getTravel = () => {
    axios.get("http://localhost:4000/api/travel/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getAllPlanets = () => axios.get("http://localhost:4000/api/planets/").then(planetsCallback).catch(errCallback)
const createPlanet = body => axios.post("http://localhost:4000/api/planets/", body).then(planetsCallback).catch(errCallback)
const deletePlanet = id => axios.delete(`${baseURL}/${id}`).then(planetsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let imageURL = document.querySelector('#img')

    let planetOb = {
        name: name.value,
        imageURL: imageURL.value
    }

    createPlanet(planetOb)

    name.value = ""
    imageURL.value = ""

}

function newPlanetDiv(planet) {
    const planetDiv = document.createElement('div')
    planetDiv.classList.add('planetdiv')

    planetDiv.innerHTML = `<img alt='you should see a planet pic here' src=${planet.imageURL} class="planet-img"/>
    <p class="planet-name">${planet.name}</p>
    <button onclick="deletePlanet(${planet.id})">Destroy this planet</button>
    `


    bigPlanetBox.appendChild(planetDiv)
}

function showPlanets(arr) {
    bigPlanetBox.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        newPlanetDiv(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
travelBtn.addEventListener('click', getTravel)
planetBtn.addEventListener('click', createPlanet)

getAllPlanets()