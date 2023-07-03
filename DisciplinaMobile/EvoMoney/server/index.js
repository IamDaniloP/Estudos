const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "bdmetas",
    port: 3306,
});

app.post("/metas", (req, res) => {

    const { metas } = req.body;

    let SQL = "INSERT INTO listametas ( metas ) VALUES (?)";

    db.query(SQL, metas, (err, result) => {

        if (err) {

            console.log(err);
            return;

        } else {

            console.log('Inserção realizada com sucesso!');

            res.send('Inserção realizada com sucesso!')

        }

    });
    
});

app.get("/metas", (req, res) => {

    let SQL = "SELECT * FROM listametas";

    db.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);        }
    });

});

app.delete("/metas/:id", (req, res) => {

    const {id} = req.params;
    console.log(`O item com o id: ${id} foi deletado com sucesso!`);

    let SQL = "DELETE FROM listametas WHERE ( `id` = ? )";

    db.query(SQL, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});

