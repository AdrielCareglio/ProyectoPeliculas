<template>
  <div class="genre-selection">
    <h2>Selecciona géneros de tu interés</h2>
    <div class="genres">
      <div
        v-for="genre in availableGenres"
        :key="genre"
        class="genre-card"
        @click="toggleGenre(genre)"
        :class="{ selected: selectedGenres.includes(genre) }"
      >
        {{ genre }}
      </div>
    </div>
    <button @click="submit" :disabled="selectedGenres.length === 0">Aceptar</button>
  </div>
</template>

<script>
export default {
  name: "GenreSelection",
  data() {
    return {
      availableGenres: [
        "CIENCIA FICCIÓN",
        "ROMANCE",
        "ACCIÓN",
        "DRAMA",
        "COMEDIA",
        "TERROR",
      ],
      selectedGenres: [],
    };
  },
  methods: {
    toggleGenre(genre) {
      if (this.selectedGenres.includes(genre)) {
        this.selectedGenres = this.selectedGenres.filter((g) => g !== genre);
      } else {
        this.selectedGenres.push(genre);
      }
    },
    submit() {
      this.$emit("submit", this.selectedGenres);
    },
  },
};
</script>

<style scoped>
.genre-selection {
  text-align: center;
  padding: 20px;
}
.genres {
  height: 300px;
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}
.genre-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.genre-card.selected {
  background-color:  rgb(156, 0, 0);
  color: white;
}
button {
  margin-top: 20px;
}
</style>
