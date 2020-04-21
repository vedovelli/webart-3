<script>
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";

export default {
  components: {
    MovieSearch,
    MovieList,
  },
};
</script>

<template>
  <main>
    <div class="container mx-auto">
      <div class="md:mx-4">
        <MovieSearch />
        <MovieList />
      </div>
    </div>
  </main>
</template>
