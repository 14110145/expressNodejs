const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let userRoute = require("./routes/user.route.js");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.render("index.pug", {
    title: "hey",
    message: "Hello there!",
    name: "LTP",
  })
);

app.use("/users", userRoute);

app.listen(port, () =>
  console.log(`Example listening at http://localhost:${port}`)
);
