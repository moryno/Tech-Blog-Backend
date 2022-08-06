// eshint version:6

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to mongoDB."))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT || 3030, () =>
  console.log("Server running at port 3030")
);
