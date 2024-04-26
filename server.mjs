import express from "express";
import "dotenv/config";

import gradeRoutes from "./routes/grades.js";

const app = express();

const PORT = process.env.PORT || 5050;
app.use(express.json());

app.use("/grades", gradeRoutes);

app.get("/", (req, res) => {
  res.send("Hello! (from server)");
});

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
