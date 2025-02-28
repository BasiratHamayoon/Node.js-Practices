const express = require("express");
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname, "public")));


app.get("/homepage", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/homepage`);
});
