const express = require("express");
const router = express.Router();
const { Shows } = require("../models/show");
const { db } = require('../db');

router.use(express.json());


router.get('/', async (req, res) => {
    const shows = await Show.findAll();
    res.json( shows );
})

router.get('/id/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    res.json(show);
})

router.get('/genre/:genre', async (req, res) => {
    const genre = req.params.genre.toLowerCase();
    const shows = await Show.findAll({
        where: db.where(
          db.fn('lower', db.col('genre')),
          genre
        )
      });
    res.json(shows);
});

router.put('/:id/cancel', async (req, res) => {
    const id = req.params.id;
    const show = await Show.findByPk(id);
    const updateShow = await Show.update({status: "cancelled"}, {where: { id: id } });
    const getUpdatedShow = await Show.findByPk(id);
    res.json(getUpdatedShow);
})

router.put('/:id/ongoing', async (req, res) => {
    const id = req.params.id;
    const show = await Show.findByPk(id);
    const updateShow = await Show.update({status: "on-going"}, {where: { id: id } });
    const getUpdatedShow = await Show.findByPk(id);
    res.json(getUpdatedShow);
})

router.delete('/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    await show.destroy();
    res.json(show);
})