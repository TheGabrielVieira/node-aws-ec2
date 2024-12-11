const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Bem vindo ao Server de TheGabrielVieira" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});