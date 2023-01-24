const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const PrismaSingleton = require('../prismaSingleton');
const prisma = PrismaSingleton.getInstance();
//const prisma =new PrismaClient();

//artist routes///////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/artists', async (req, res, next) => {
    try {
        const artists = await prisma.artist.findMany();
        res.send({ artists: artists });
    } catch (error) {
        next(error);
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
        });
        res.send(artist);
    } catch (error) {
        next(error);
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
router.patch('/artists/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedArtist = await prisma.artist.update({
            where:{
                id: Number(id)
            },
            data: data
            //you can use include: { Artwork: true } to include refrenced data
        })
        res.send(updatedArtist)
    } catch (error) {
        next(error);
    }
});
router.delete('/artists/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const deletedArtist = await prisma.artist.delete({
            where:{
                id: Number(id)
            }
        })
        res.send(deletedArtist)
    } catch (error) {
        next(error);
    }
});
//artwork routes///////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/artworks', async (req, res, next) => {
    try {
        const artworks = await prisma.artwork.findMany();
        res.send({ artworks: artworks });
    } catch (error) {
        next(error);
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
        });
        res.send(artwork);
    } catch (error) {
        next(error);
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
router.patch('/artworks/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedArtwork = await prisma.artwork.update({
            where:{
                id: Number(id)
            },
            data: data
            //you can use include: { Artwork: true } to include refrenced data
        })
        res.send(updatedArtwork)
    } catch (error) {
        next(error);
    }
});
router.delete('/artworks/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const deletedArtwork = await prisma.artwork.delete({
            where:{
                id: Number(id)
            }
        })
        res.send(deletedArtwork)
    } catch (error) {
        next(error);
    }
});
//storage routes///////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/storages', async (req, res, next) => {
    try {
        const storages = await prisma.storage.findMany();
        res.send({ storages: storages });
    } catch (error) {
        next(error);
    }
});
router.get('/storages/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const storage = await prisma.storage.findUnique({
            where: {
                id: Number(id)
            },
            include: { Artwork: true }
        });
        res.send(storage);
    } catch (error) {
        next(error);
    }
});
router.post('/storages', async (req, res, next) => {
    try {
        const data = req.body;
        const storage = await prisma.storage.create({
            data: data
        });
        res.send(storage);
    } catch (error) {
        next(error);
    }
});
router.patch('/storages/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedstorage = await prisma.storage.update({
            where:{
                id: Number(id)
            },
            data: data
            //you can use include: { Artwork: true } to include refrenced data
        })
        res.send(updatedstorage)
    } catch (error) {
        next(error);
    }
});
router.delete('/storages/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const deletedstorage = await prisma.storage.delete({
            where:{
                id: Number(id)
            }
        })
        res.send(deletedstorage)
    } catch (error) {
        next(error);
    }
});

//artworkLocation routes///////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/artworkLocations', async (req, res, next) => {
    try {
        const artworkLocations = await prisma.artworkLocation.findMany();
        res.send({ artworkLocations: artworkLocations });
    } catch (error) {
        next(error);
    }
});
router.get('/artworkLocations/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const artworkLocation = await prisma.artworkLocation.findUnique({
            where: {
                id: Number(id)
            },
            include: { Artwork: true,Storage: true }
        });
        res.send(artworkLocation);
    } catch (error) {
        next(error);
    }
});
router.post('/artworkLocations', async (req, res, next) => {
    try {
        const data = req.body;
        const artworkLocation = await prisma.artworkLocation.create({
            data: data
        });
        res.send(artworkLocation);
    } catch (error) {
        next(error);
    }
});
router.patch('/artworkLocations/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedArtworkLocation = await prisma.artworkLocation.update({
            where:{
                id: Number(id)
            },
            data: data
            //you can use include: { Artwork: true } to include refrenced data
        })
        res.send(updatedArtworkLocation)
    } catch (error) {
        next(error);
    }
});
router.delete('/artworkLocations/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const deletedArtworkLocation = await prisma.artworkLocation.delete({
            where:{
                id: Number(id)
            }
        })
        res.send(deletedArtworkLocation)
    } catch (error) {
        next(error);
    }
});
module.exports = router;