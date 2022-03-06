const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const client = require("./util/database");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

client.connect();

app.get("/test", (req, res) => {
  client.query(`Select * from users`),
    (err, result) => {
      if (!err) {
        res.send(result.rows);
        console.log(result);
      }
    };
    client.end;
});

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const res = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
