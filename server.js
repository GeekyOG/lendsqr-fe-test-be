const express = require("express");
const generatedUsers = require("./generated-users.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/generated-users", (req, res) => {
  res.json(generatedUsers);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
