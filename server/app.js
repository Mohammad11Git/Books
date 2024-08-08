const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello BookStore mernstack");
});

mongoose.connect("mongodb+srv://mern-bookstore:om7744@cluster0.fyqfduv.mongodb.net/mern-bookstore?retryWrites=true&w=majorit", {
  writeConcern: {
    w: 'majority',
    wtimeout: 5000
  }
}).then(() => {
  app.listen(port, () => {
    console.log(`start server on port ${port}`);
  });
});

app.use("/books", bookRouter);
app.use("/", userRouter);
