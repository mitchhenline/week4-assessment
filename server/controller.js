const planets = require('./db.json')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will find true love at Applebees", "The price of stamps will climb ever higher", "You will take a short sea voyage", "It takes a big dog to weigh a ton", "Believe in yourself, no one else does"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getTravel: (req, res) => {
        const destinations = ["Puerto Rico", "Alaska", "South Africa", "Australia", "Delaware"];

        let randomIndex = Math.floor(Math.random() * destinations.length);
        let randomDestination = destinations[randomIndex];

        res.status(200).send(randomDestination);
    },

    getPlanet: (req, res) => {
        res.status(200).send(planets)
    },

    deletePlanet: (req, res) => {
        const deleteId = req.params.id
        let index = planets.findIndex(element => element.id === +deleteId)
        planets.splice(index, 1)
        res.status(200).send(planets)
    },

    createPlanet: (req, res) => {
        const {name, imageURL} = req.body
 
        let greatestId = -1
        for (let i = 0; i < planets.length; i++) {
            if (planets[i].id > greatestId) {
                greatestId = planets[i].id
            }
        }
        let nextId = greatestId + 1
        
        let newPlanet = {
            id: nextId,
            name: name,
            imageURL: imageURL

        }

        planets.push(newPlanet)
        res.status(200).send(planets)
    },
}