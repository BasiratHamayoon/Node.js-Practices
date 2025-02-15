import express from "express"
const app = express()

app.get("/", (req, res) => {
    res.json({
        success: "true",
        message: "Welcome to the Express"
    });
    console.log("Welcome to the Express");
});

const port = 6000;
app.listen(port, () => {
    console.log(`Your Server is Running on http//:localhost ${port}`);
})