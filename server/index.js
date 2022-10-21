const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getTravel, getPlanet, deletePlanet, createPlanet, updatePlanet } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/travel", getTravel);
app.get('/api/planets', getPlanet);
app.delete('/api/planets/:id', deletePlanet);
app.post('/api/planets', createPlanet);
app.put('/api/planets/:id', updatePlanet);

app.listen(4000, () => console.log("Server running on 4000"));
