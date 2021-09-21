const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');



const app = express();


// app.get('/', (req, res) => {
//     res.send("Inside backend");
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//MongoDB
const dbUrl ="mongodb+srv://firatgoktepe:123456**@mern-tutorial.4k7wm.mongodb.net/react-shop?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            UseFindandModify: false, 
        });
        console.log("MongoDB connection established");
    } catch (error) {
        console.log(error);
        
    }
}

//Connect Database

connectDB();


app.post("/api/register", async (req, res) => {
    try {
        await User.create({
            name: req.body.userName,
            email: req.body.userEmail,
            comment: req.body.userComment
        });

        res.json({
            message: "User Registered"
        })
    } catch (error) {
        res.json({
            message: "That email is already registered"
        });
    }
    
});

// app.get("/api/users", async (req, res) => {
//     try {
//         const users = await User.find() //go to collection and bring everthing

//         res.json({
//             users: users
            
//         })

//     } catch (error) {
//         console.log(error);
        
//     }
// });

const Port = 5000;

app.listen(Port, () => {
    console.log("Server running on Port " + Port );
})