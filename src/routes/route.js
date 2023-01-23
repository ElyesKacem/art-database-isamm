const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const PrismaSingleton = require('../prismaSingleton');
const prisma = PrismaSingleton.getInstance();
//const prisma =new PrismaClient();



router.get('/artists', async (req, res, next) => {
    try {
        const artworks = await prisma.artist.findMany();
        res.send(artworks);
    } catch (error) {
        next(error)
    }
})
router.get('/artworks', async (req, res, next) => {
    try {
        const artworks = await prisma.artwork.findMany();
        res.send(artworks);
    } catch (error) {
        next(error)
    }
})
router.get('/artworks/:id', async (req, res, next) => {
    res.send("yo")
})
router.post('/artworks', async (req, res, next) => {
    res.send("yo")
})
router.delete('/artworks/:id', async (req, res, next) => {
    res.send("yo")
})
router.patch('/artworks/:id', async (req, res, next) => {
    res.send("yo")
})
module.exports = router;