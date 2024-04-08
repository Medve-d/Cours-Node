import express, { Router } from "express";
import carsRoute from "./routes/cars.js"

const app = express();

const PORT = process.env.PORT || 3001;

// Middlewares
//middleware qui permet de parser les données issus 
app.use(express.json())

//middleware qui se charge de rediriger les req qui concernent les voitures vers le router des voitures
//http://localhost:3001/cars => retourne la liste des voitures
//http://localhost:3001/cars/:id => retourne la voiture avec l'id :id
app.use("/cars", carsRoute);

// Routes définit une route GET / qui renvoie un message
app.get("/", (request, response) => {
    response.json({ message: "Hello World !"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});