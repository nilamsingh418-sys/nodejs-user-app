const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routers/user_router");

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
