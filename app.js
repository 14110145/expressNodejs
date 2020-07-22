require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const coockieParser = require("cookie-parser");
const authMiddleware = require("./middlewares/auth.middleware");

const app = express();
const port = 3000;

let userRoute = require("./routes/user.route.js");
let authRoute = require("./routes/auth.route.js");
let productRoute = require("./routes/product.route.js");

app.use("/public", express.static("public"));
app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(coockieParser(process.env.SESSION_SECRET));

app.get("/", (req, res) =>
  res.render("index.pug", {
    message: "Hello there!",
    name: "LTP",
  })
);

app.use("/users", authMiddleware.authLogin, userRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);

app.listen(port, () =>
  console.log(`Example listening at http://localhost:${port}`)
);
