<template>
  <div class="characters-wrapper container">
    <ul>
        <li v-for="character in characters" :key="character.id">
            <router-link :to="{ name: 'character', params: { id: character.id } }">
                {{ character.name }}
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { public_key, secret_key } from '@/marvel';
import axios from 'axios';

export default {
    name: 'CharactersPage',
    data() {
        return {
            characters: []
        }
    },
    methods: {
        getCharacters() {
            axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
                .then((result) => {
                    this.characters = result.data.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.getCharacters()
    }
}
</script>

<style>

</style>