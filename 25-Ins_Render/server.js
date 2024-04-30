const express = require("express");
const path = require("path");

// this is the new part for Render. this says hey if the environment variable exists for a port, set it to that. If NOT, set it to 3001
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
