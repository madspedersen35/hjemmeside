const express = require("express");
const app = express();
const formData = require("express-form-data");

const PORT = process.env.PORT || 5555;
app.listen(PORT, console.log(`Serveren lytter til ${PORT}`));
// Her oprettes den server vores hjemmeside skal ligge på
// Der benyttes ydermere en callback function som fortæller os at serveren kører


// bruger kontrol 
const brugerKontrol = require("./hjemmeside/kontrol/bruger_kontrol");
// Vi henter filen så vi kan benytte den som variabel så vi senere kan bruge den til en route


//middelware, her beskriver vi hvad der skal ske før hver eneste request 
app.use(express.static("./hjemmeside/Frontend"));
//Ovenfor beskrives at alle vores filer inde i vores frontend mappe skal ligge som endpoints
app.use('/', express.static("vare"));
app.use('/uploads', express.static('uploads'));
const options = {
    uploadDir: "./uploads"
}
const vare = [];

app.post('/vare',formData.parse(options), (req,res, next) =>{
    let {titel, pris, kategori}= req.body;
    let thumbnail = req.files.thumbnail.path.replace('\\, /');
    vare.push({titel,pris,kategori,thumbnail});
    res.send();
});

app.get('/alle_vare',(req, res)=>{
    res.json(vare);
});



app.use(express.json());
//det gør at når vi sender noget over nettet så kommer det som json objekt og ikke som en string

app.use("/brugere", brugerKontrol);
// Nu har vi så lavet et endpoint så tager udgangspunkt i min bruger kontrol fil 







