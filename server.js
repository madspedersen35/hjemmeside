const express = require("express");
const app = express();

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Serveren lytter til ${PORT}`));
