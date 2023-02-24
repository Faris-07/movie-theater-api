const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { Users } = require("../models/users");
const { Shows } = require("../models/shows");

router.use(express.json());

router.get("/users", async (req, res) => {
    const allUsers = await Users.findAll();
    res.status(201).send(allUsers);
});

router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const findUser = users[id - 1];
    res.json(findUser);
})

router.get('/:id/shows', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    const shows = await user.getShows();
    res.json(shows);
})

router.put('/:id/shows', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    const show = await Show.findByPk(req.body.showId);
    await user.addShow(show);
    res.json(show);
})

module.exports = router;