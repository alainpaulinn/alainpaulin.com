const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("Welcome to alainpaulin.com");
});

// PORT
const PORT = 5000;
app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
