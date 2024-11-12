import express from "express";
import fs from "fs";

const app = express();

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json")
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};
const writeData = (data) => {
    try {
       fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch (error) {
        console.log(error);
    }
};


app.get("/", (req, res) => {
    res.send("welcome to my api!!")
});

app.listen(3000, () => {
    console.log('server listening on port 3000')
});

