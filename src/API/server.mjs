import express from 'express';
import cors from 'cors';
import characters from './characters.json' assert { type: 'json' };
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/characters', express.static(path.join(__dirname, 'public', 'characters'),  { extensions: ['webp'] }));


// Rota para obter a lista de personagens
app.get('/api/characters', (req, res) => {
  res.json(characters);
});

// Rota para obter personagem específico com base no slug
app.get('/api/characters/:slug', (req, res) => {
  const { slug } = req.params;
  const character = characters.find((char) => char.slug === slug);

  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ message: 'Personagem não encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

