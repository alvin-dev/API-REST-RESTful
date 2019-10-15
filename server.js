const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

// req = request / res = response 
app.get("/clients", function (req, res) { 
    res.json(data)
});

// GET
app.get("/clients/:id", function (req, res) { 
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    res.json(client);
});

// POST
app.post("/clients", function (req, res) { 
    const { name, email } = req.body;

    //salvar

    res.json({ name, email });
});

// PUT
app.put("/clients/:id", function (req, res) { 
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);

});

// DELETE
app.delete("/clients/:id", function (req, res) { 
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);

});



app.listen(3000, function () {
    console.log('Serven is running');
});