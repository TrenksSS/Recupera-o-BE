const funcionarios = require('../models/funcionarios.model');
const con = require('../dao/modelDAO');
const conp = require('../controlles/composite');




const read = (req, res) => {
    con.query(funcionarios.read(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
const readAll = (req, res) => {
    con.query(funcionarios.readAll(req.params), (err, result) => {
        if (err == null)
            res.json(conp.funci(result)).end();
        else
            res.status(500).end();
    });
}

const create = (req, res) => {
    con.query(funcionarios.create(req.body),(err,result) => {
        if(err == null) {
            res.status(201).json({ id: result.insertId}).end();
        }else{
            res.json(err).end();
        }
    })
}
const update = (req, res) => {
    con.query(funcionarios.update(req.body),(err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(404).json(err).end();
        }
    })
}
const del = (req, res) => {
    con.query(funcionarios.delete(req.params),(err, result) => {
        if (result.affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).json(err).end();
        }
    })
}



module.exports = {
    read,
    create,
    del,
    update,
    readAll
}