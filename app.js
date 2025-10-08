const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from the CI/CD demo app!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
