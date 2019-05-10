const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 8000;

let pool;

module.exports = {
  getPool: function() {
    if (pool) return pool;
    if (process.env.NODE_ENV === 'production') {
      pool = mysql.createPool({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
      });
    } else {
      pool = mysql.createPool({
        host: "localhost",
        user: 'doss2k', // MySQL username
        password: 'password', // MySQL password
        database: "ncaatraindata" // MySQL database name
      });
     }
    return pool;
  }
};

const mainRoutes = require("./routes/mainRoutes");
app.use(cors());
app.use(bodyParser.json());
app.use(mainRoutes);
app.use(express.static('../server/model'))

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});