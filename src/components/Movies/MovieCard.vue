<script>
import { BACKDROP_BASE_URL } from '@/api/movie-api';
export default {
  data() {
    return {
      backdropBaseUrl: BACKDROP_BASE_URL,
    };
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    releaseDate() {
      return new Date(this.movie.release_date).toLocaleDateString();
    },
  },
};
</script>

<template>
  <div class="p-4">
    <div class="flex flex-col md:flex-row">
      <div class="flex-shrink-0">
        <img
          class="rounded-lg md:w-56 md:rounded"
          :src="`${backdropBaseUrl}/${movie.backdrop_path}`"
          :alt="movie.title"
          :title="movie.title"
        />
      </div>
      <div class="w-full md:ml-6">
        <div class="mt-3 text-sm font-bold tracking-wide text-red-600 uppercase md:mt-0">
          {{ movie.title }}
        </div>
        <div class="flex p-2 my-2 text-xs text-gray-500 bg-gray-100 rounded">
          <p class="w-full">
            Avaliação:
            <strong>{{ movie.vote_average }}</strong>
            com {{ movie.vote_count }} votos
          </p>
          <p class="w-full text-right">Lançamento: {{ releaseDate }}</p>
        </div>
        <p class="mt-2 text-sm text-gray-500">
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>
