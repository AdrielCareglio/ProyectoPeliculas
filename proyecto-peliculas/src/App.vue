<template>
  <div id="app">
    <header v-if="screen !== 'loading'">
      <div class="container">
        <h1 class="logo" @click="goToGenreSelection">NOTFLIX</h1>
      </div>

      <div v-if="user">
        <span class="user-info">Bienvenido, {{ user.email }}</span>
        <button class="logout" @click="logout">Cerrar sesión</button>
      </div>
    </header>

    <LoadingScreen v-if="screen === 'loading'" />
    <LoginForm v-if="screen === 'login'" @authenticated="handleLogin" />
    <GenreSelection v-if="screen === 'genres'" @submit="handleGenreSelection" />
    <MovieResults
      v-if="screen === 'results'"
      :movies="filteredMovies"
      @go-back="goToGenreSelection"
    />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue';
import LoginForm from './components/LoginForm.vue';
import GenreSelection from './components/GenreSelection.vue';
import MovieResults from './components/MovieResults.vue';
import { useCurrentUser } from "vuefire";
import { getAuth, signOut } from "firebase/auth"; // Importar logout de Firebase

export default {
  components: {
    LoadingScreen,
    LoginForm,
    GenreSelection,
    MovieResults,
  },
  data() {
    return {
      screen: "loading", // Estados: 'loading', 'login', 'genres', 'results'
      genres: [], // Géneros seleccionados
      movies: [], // Lista completa de películas
      filteredMovies: [], // Películas filtradas por género
      user: useCurrentUser(), // Usuario autenticado actual
    };
  },
  methods: {
    async loadMovies() {
      try {
        const response = await fetch('/movies.json');
        if (!response.ok) throw new Error('Error al cargar las películas');
        this.movies = await response.json();
      } catch (error) {
        console.error('Error al cargar las películas:', error);
      }
    },
    handleLogin() {
      this.screen = "genres"; // Redirige a la pantalla de selección de géneros
    },
    handleGenreSelection(selectedGenres) {
      this.genres = selectedGenres;
      this.filteredMovies = this.movies.filter((movie) =>
        selectedGenres.includes(movie.genre)
      ).slice(0, 3); // Obtiene solo 3 películas
      this.screen = "results"; // Cambia a la pantalla de resultados
    },
    goToGenreSelection() {
      this.screen = "genres"; // Regresa a la pantalla de selección de géneros
    },
    goToLoginForm() {
      this.screen = "login"; // Regresa al formulario de login
    },
    async logout() {
      const auth = getAuth(); // Obtiene la instancia de autenticación
      try {
        await signOut(auth); // Cierra la sesión del usuario
        alert("Sesión cerrada con éxito");
        this.screen = "login"; // Redirige a la pantalla de inicio de sesión
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
        alert("Ocurrió un error al cerrar la sesión.");
      }
    },
  },
  mounted() {
    this.loadMovies(); // Carga las películas al montar la aplicación
    setTimeout(() => {
      this.screen = "login"; // Cambia a la pantalla de login tras 5 segundos
    }, 5000);
  },
};
</script>

<style scoped>
.logo {
  margin-left: 20px;
}
.logout {
  margin: 2px 20px 0px 0px;
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
.logout:hover {
  background-color: #5b0000;
}
</style>
