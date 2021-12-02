const express = require("express");
const app = express();

const PORT = process.env.PORT || 5555;


// bruger kontrol 
const brugerKontrol = require("./hjemmeside/kontrol/bruger_kontrol");
// Vi henter filen så vi kan benytte den som variabel så vi senere kan bruge den til en route

const vareKontrol = require("./hjemmeside/kontrol/vare_kontroller");
//middelware, her beskriver vi hvad der skal ske før hver eneste request 
app.use(express.static("./hjemmeside/Frontend"));
//Ovenfor beskrives at alle vores filer inde i vores frontend mappe skal ligge som endpoints

app.use(express.json());
//det gør at når vi sender noget over nettet så kommer det som json objekt og ikke som en string

app.use("/brugere", brugerKontrol);
// Nu har vi så lavet et endpoint så tager udgangspunkt i min bruger kontrol fil 


app.use('/vare', vareKontrol);




app.listen(PORT, console.log(`Serveren lytter til ${PORT}`));
// Her oprettes den server vores hjemmeside skal ligge på
// Der benyttes ydermere en callback function som fortæller os at serveren kører