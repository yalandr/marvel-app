<template>
  <div class="home">
    <CharactersPage />
  </div>
</template>

<script>
// @ is an alias to /src
import CharactersPage from '@/components/CharactersPage.vue';

export default {
  name: 'HomeView',
  components: {
    CharactersPage
  }
}
</script>
