const express = require("express");
const cors = require("cors");
const generatedUsers = require("./generated-users.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/generated-users", (req, res) => {
  res.json(generatedUsers);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
