import express from "express"
import morgan from "morgan";
import multer from "multer";
const app = express()


app.get("/", (req, res) => {
    // res.json({
    //     success: "true",
    //     message: "Welcome to the Express"
    // });
    // console.log("Welcome to the Express");


//Error MiddleWare
//     throw{
//         status: 500,
//         message: "Something went wrong! Please Refresh"
//     }
});

// app.get("/about", (req, res) => {
//     res.status(500).json({
//         success: false,
//         message: "something went wrong!",
//     });
// });

// app.use((error, req, res, next) => {
//     console.log(error.message);
//     res.json({
//         success: false,
//         message: error.message,
//     });
// });

//Builtin Middleware 
//Through form-data
app.use(express.json());

//Moragn Third Party middleware
// div
//combine
//tiny
// app.use(morgan("dev"))

//Through URLENCODED

app.use(express.urlencoded({ extand: true}));
//Multer
const upload = multer();
app.use(upload.any());

app.post('/regesterUser', (req, res) => {
    console.log(req.body);
    res.status(201).send({ data: req.body })
})

const port = 6000;
app.listen(port, () => {
    console.log(`Your Server is Running on http//:localhost ${port}`);
})