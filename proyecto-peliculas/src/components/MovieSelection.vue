<template>
  <div>
    <h2>Selecciona películas de tu agrado</h2>
    <div class="movie-grid">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="movie-card"
        @click="selectMovie(movie.genre)"
        :class="{ selected: selectedGenres.includes(movie.genre) }"
      >
        <img :src="movie.image" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.genre }}</p>
      </div>
    </div>
    <button @click="submit" :disabled="selectedGenres.length < 4">Aceptar</button>
  </div>
</template>

<script>
export default {
  name: "MovieSelection",
  data() {
    return {
      movies: [], // Inicialmente vacío; será llenado dinámicamente
      selectedGenres: [],
    };
  },
  methods: {
    async loadMovies() {
      try {
        const response = await fetch('/movies.json'); // Ruta relativa a public/
        this.movies = await response.json();
      } catch (error) {
        console.error('Error al cargar las películas:', error);
      }
    },
    selectMovie(genre) {
      if (this.selectedGenres.length < 4 && !this.selectedGenres.includes(genre)) {
        this.selectedGenres.push(genre);
      } else if (this.selectedGenres.includes(genre)) {
        // Permite deseleccionar géneros ya seleccionados
        this.selectedGenres = this.selectedGenres.filter((g) => g !== genre);
      }
    },
    submit() {
      this.$emit("submit", this.selectedGenres);
    },
  },
  mounted() {
    this.loadMovies(); // Carga las películas al montar el componente
  },
};
</script>

<style scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.movie-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.movie-card.selected {
  border-color: #007bff;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
  transform: scale(1.05);
}

.movie-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.movie-card h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: bold;
}

.movie-card p {
  margin: 0.5rem 0;
  color: #666;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
