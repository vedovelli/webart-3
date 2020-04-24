<script>
import MovieSearch from './MovieSearch';
import MovieList from './MovieList';
import { mapState } from 'vuex';

export default {
  components: {
    MovieSearch,
    MovieList,
  },
  computed: {
    ...mapState('Movies', ['error']),
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div class="md:mx-4">
      <MovieSearch />
      <h3 v-if="error !== ''" class="text-2xl text-center">{{ error }}</h3>
      <MovieList v-else />
    </div>
  </div>
</template>
