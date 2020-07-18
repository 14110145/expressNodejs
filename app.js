const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

let users = [
  { id: "1", name: "Lam" },
  { id: "2", name: "Toan" },
  { id: "3", name: "Phu" },
];

app.get("/", (req, res) =>
  res.render("index.pug", {
    title: "hey",
    message: "Hello there!",
    name: "LTP",
  })
);

app.get("/users", (req, res) => {
  res.render("users/index.pug", { users: users });
});

app.get("/users/search", (req, res) => {
  let q = req.query.q;
  let matchedUser = users.filter(function (user, index) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("users/index.pug", { queryInput: q, users: matchedUser });
});

app.listen(port, () =>
  console.log(`Example listening at http://localhost:${port}`)
);
