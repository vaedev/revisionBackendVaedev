const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

client.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
