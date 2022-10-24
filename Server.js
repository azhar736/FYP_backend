const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./db");
db();

// app.get("/", (req, res) => {
//   res.send("Home Page!!");
// });

//require Routes
app.use(require("./routes/route"));
app.listen(PORT, () => `Server listening on http://localhost:${PORT}`);
