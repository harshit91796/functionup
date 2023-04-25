import express from 'express';
const app = express();
const port = 4000;
app.use(express.json())

let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },

]



app.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    const data1 = req.body;
    const name = data1.name;
    const existingPlayer = players.find(function (player) { return player.name === name })
    console.log(name);
    if (existingPlayer) {
        return res.json({ error: "there is an player already exist" });

    }
    players.push(data1);
    return res.send({ data: players, status: true })
    // res.send("hello");
    // res.json(req.body);
   
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

  
