import express from 'express';
const router = express.Router(); 
import Character from '../models/character.model';

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/add', async (req, res) => {
    try {
        const { name, description, image } = req.body;
        const newCharacter = new Character({ name, description, image });
        await newCharacter.save();
        res.json('Character added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

export default router;
