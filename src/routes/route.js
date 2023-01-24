const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const PrismaSingleton = require('../prismaSingleton');
const prisma = PrismaSingleton.getInstance();
//const prisma =new PrismaClient();

//artist routes
router.get('/artists', async (req, res, next) => {
    try {
        const artists = await prisma.artist.findMany();
        res.send({ artists: artists });
    } catch (error) {
        next(error)
    }
});
router.get('/artists/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const artist = await prisma.artist.findUnique({
            where: {
                id: Number(id)
            },
            include: { Artwork: true }
        })
        res.send(artist)
    } catch (error) {

    }
});
router.post('/artists', async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        data.birthDate = new Date(data.birthDate);
        data.deathDate = new Date(data.deathDate);
        console.log(data);
        const artist = await prisma.artist.create({
            data: data
        });
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

//artwork routes
router.get('/artworks', async (req, res, next) => {
    try {
        const artworks = await prisma.artwork.findMany();
        res.send({ artworks: artworks });
    } catch (error) {
        next(error)
    }
});
router.get('/artworks/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const artwork = await prisma.artwork.findUnique({
            where: {
                id: Number(id)
            },
            include: { artist: true }
        })
        res.send(artwork)
    } catch (error) {
        next(error)
    }
});
router.post('/artworks', async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        data.creation_date = new Date(data.creation_date);
        console.log(data);
        const artwork = await prisma.artwork.create({
            data: data
        });
        res.send(artwork);
    } catch (error) {
        next(error);
    }
});

router.get('/artworks/:id', async (req, res, next) => {
    res.send("yo")
});
router.delete('/artworks/:id', async (req, res, next) => {
    res.send("yo")
});
router.patch('/artworks/:id', async (req, res, next) => {
    res.send("yo")
});
module.exports = router;