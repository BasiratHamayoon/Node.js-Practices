const express = require("express");
const path = require("path");
const app = express();

// Set static folder for CSS and images
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route for Home Page
app.get("/Products", (req, res) => {
    res.render("index", { 
        productItems: [
            { img: "/1.jpg", title: "Sneakers", price: 42.00 },
            { img: "/2.jpg", title: "T-Shirt", price: 12.00 },
            { img: "/3.jpg", title: "Sneakers", price: 42.00 },
            { img: "/4.jpg", title: "T-Shirt", price: 16.00 },
        ] 
    });
});

// Start the server
app.listen(9000, () => {
    console.log("Server is Running on Port 9000");
});
