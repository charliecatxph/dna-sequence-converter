const express = require("express");
const app = express();

// Handle 404
app.use(function(req, res) {
    res.status(404).send('404: Go back to the main home page. \"https://dna-ctx.vercel.app\". (Ikaw, balik ka na ano... de joke lang, hay.)', 404);
  });
  
  // Handle 500
  app.use(function(error, req, res, next) {
    res.status(500).send('500: Internal Server Error', 500);
  });

app.use("/99f26e1b323a1ee835bd60025fb309746061c854e6eb4e57e042f7aa8448a0e6", express.static(__dirname + "/styles"));
app.use("/fce8f1224277b5465f4608fd4759256068757252192488716fb5b1f14f93817c", express.static(__dirname + "/scripts"));
app.use("/media", express.static(__dirname + "/media"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})




app.listen(5000);
