const express = require('express') // require -> commonJS
const crypto = require('node:crypto')
const cors = require('cors')

const movies = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./schemas/movies')

const app = express()

app.disable('x-powered-by');

app.get('/movies', (req, res) => {
    const { genre } = req.query;
    if (genre) {
      const filteredMovies = movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      );
      return res.json(filteredMovies);
    }
    res.json(movies);
});

app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if (movie) return res.json(movie);
    res.status(404).json({ message: 'Movie not found' });
});

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)
    
  if(result.error){
    return res.status(404).json({ error: result.error })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }

  
    movies.push(newMovie);
  
    res.status(201).json(newMovie);
});

app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`);
});