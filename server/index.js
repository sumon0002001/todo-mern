const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const todo = require("./routes/todo");

dotenv.config();

connectDB();
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  res.send({ message: "Hello there" });
});

app.use("/api/todo", todo);

const PORT = 4000;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
