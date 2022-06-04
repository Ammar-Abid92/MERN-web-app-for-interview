const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ammar:367900aA@cluster0.1zari.mongodb.net/interview?retryWrites=true&w=majority";


// to import data to mongodb atlas, use this command in terminal:
// mongoimport --uri mongodb+srv://ammar:367900aA@cluster0.1zari.mongodb.net/interview --collection cars --type JSON --file data.json


mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;
