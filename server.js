const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
// ///////////////////////////////////////////////////////////////////////////
mongoose.connect("mongodb://localhost:27017/abbrevsDB", { useNewUrlParser: true});

const abbrevSchema = new mongoose.Schema({
  abbrev: String,
  definiton: String
})

const Abbrev = new mongoose.model("Abbreviation", abbrevSchema)
// ///////////////////////////////////////////////////////////////////////////

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// CRUD actions. -------------------------------------------------------

// Read/Get the abbreviations. -----------------------------------------
// Issues using the async/await syntax to be explored!
app.get("/", (req, res) => {
  try {
    Abbrev.find((err, abbreviations) => {
      res.render("index.ejs", {abbrevsArray: abbreviations});
    })
  } catch (error) {
    console.log(error);
  }
});

// Create an abbreviation. ------------------------------------------
app.post("/", (req, res) => {
  const abbrev = new Abbrev({
    abbrev: req.body.abbrev,
    definiton: req.body.abbrevDefin
  })
  try {
    abbrev.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect("/")
});

// Update an abbreviation. -------------------------------------------
app.post("/update", (req, res) => {
  Abbrev.updateOne({_id: req.body.id}, {abbrev: req.body.abbrev, definiton: req.body.abbrevDefin}, (err) => {
    try {
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  })
});

// Delete an abbreviation. -------------------------------------------
app.post("/delete", (req, res) => {
  Abbrev.deleteOne({_id: req.body.id}, (err) => {
    try {
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  })
});

app.listen(3000, () => {
  console.log("The server is running on port 3000.");
})
