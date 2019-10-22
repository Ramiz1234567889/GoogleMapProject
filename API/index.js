const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { Schema, model } = mongoose;

const PumbSchema = new Schema({
  Name: { type: String },
  Phone: { type: Number },
  CarNo: { type: Number },
  CarType: { type: String }
});

const Pumb = model("pumb", PumbSchema);

const DB_URL = "mongodb://127.0.0.1:27017/PumbDB";

mongoose.connect(DB_URL, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected");
  }
});

const port = process.env.PORT || 4500;

app.listen(port);

app.post("/register", (req, res) => {
  const { name, phone, car_num, car_type } = req.body;

  new Pumb({
    Name: name,
    Phone: phone,
    CarNo: car_num,
    CarType: car_type
  }).save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        data: result
      });
    }
  });
});

app.get("/pumbs", (req, res) => {
  Pumb.find().exec((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        pumbs: result
      });
    }
  });
});
