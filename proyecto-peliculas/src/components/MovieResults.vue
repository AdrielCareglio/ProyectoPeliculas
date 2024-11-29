<template>
  <div class="movie-results">
    <h2>Tus Películas Recomendadas</h2>
    <div class="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="movie.image" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.genre }}</p>
      </div>
    </div>
    <!-- Botón de Volver -->
    <button class="back-button" @click="goBack">Volver</button>
  </div>
</template>

<script>
export default {
  name: "MovieResults",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goBack() {
      this.$emit("go-back"); // Emite el evento al componente padre
    },
  },
};
</script>

<style scoped>
.movie-results {
  text-align: center;
  padding: 20px;
}
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 80px;
}
.movie-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
}
.movie-card img {
  width: 50%; 
  margin-top: 30px;
  height: 500px; 
  object-fit: cover; 
}
.movie-card h3 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
}
.movie-card p {
  font-size: 1rem;
  color: #777;
}
.back-button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: rgb(156, 0, 0);
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.back-button:hover {
  background-color: #5b0000;
}
</style>
