<script>
import MovieCard from '@/components/Movies/MovieCard';
import { mapState, mapGetters } from 'vuex';

export default {
  components: { MovieCard },
  computed: {
    ...mapState('Movies', ['wasSearched']),
    ...mapGetters('Movies', ['movies']),
    hasMovies() {
      return !!this.movies.length;
    },
  },
};
</script>

<template>
  <div class="mb-16">
    <main>
      <h3
        data-testid="no-results"
        v-if="wasSearched && !hasMovies"
        class="py-6 mt-3 text-center shadow sm:rounded-lg xl:mx-3 bg-gray-50"
      >
        Nenhum filme encontrado
      </h3>
      <ul data-testid="movie-list" v-else class="m-0 xl:grid xl:grid-cols-2">
        <li
          data-testid="movie"
          v-for="movie in movies"
          :key="movie.id"
          class="p-1 mx-0 my-3 bg-white shadow cursor-pointer xl:mx-3 sm:rounded-lg xl:justify-between"
        >
          <MovieCard :movie="movie" />
        </li>
      </ul>
    </main>
  </div>
</template>
