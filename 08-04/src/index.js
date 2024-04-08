import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

const mockCars = [
    { id: 1, brand: "Audi", model: "A3" },
    { id: 2, brand: "Renault", model: "Clio" },
    { id: 3, brand: "Peugeot", model: "208" },
    { id: 4, brand: "BMW", model: "Serie 1" },
    { id: 5, brand: "Mercedes", model: "Classe A" },
    { id: 6, brand: "Citroen", model: "C3" },
    { id: 7, brand: "Ford", model: "Fiesta" },
    { id: 8, brand: "Opel", model: "Corsa" },
    { id: 9, brand: "Toyota", model: "Yaris" },
    { id: 10, brand: "Volkswagen", model: "Polo" },
  ];

// Middlewares

//middleware qui se charge de rediriger les req qui concernent les voitures vers le router des voitures
//http://localhost:3001/cars
app.use("/cars", (request, response) => {

});

// Routes définit une route GET / qui renvoie un message
app.get("/", (request, response) => {
    response.json({ message: "Hello World !"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
