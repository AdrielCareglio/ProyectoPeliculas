
<template>
  <div>
    <h2>Tu Película Recomendada</h2>
    <div class="movie-card">
      <img :src="recommendation.image" :alt="recommendation.title" />
      <h3>{{ recommendation.title }}</h3>
      <p>{{ recommendation.genre }} - {{ recommendation.year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  props: {
    recommendation: {
      type: Object,
      required: true,
    },
  },
};
</script>

