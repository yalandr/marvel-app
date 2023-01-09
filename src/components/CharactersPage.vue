<template>
  <div class="characters-wrapper">
    <ul class="flex-list flex just-btwn container">
        <li v-for="character in characters" :key="character.id" class="card-item">
            <router-link :to="{ name: 'character', params: { id: character.id } }">
                {{ character.name }} <br>
                <img :src="`${character.thumbnail.path}/${characterPosterSize}`" alt="Poster">
            </router-link>
        </li>
    </ul>
    <button class="btn" @click="moreItems">More</button>
  </div>
</template>

<script>
import { public_key, secret_key } from '@/marvel';
import axios from 'axios';

export default {
    name: 'CharactersPage',
    data() {
        return {
            characters: [],
            characterPosterSize: 'portrait_medium.jpg',
            pageLimit: 12,
            pageOffset: 12,
            totalPages: null,
            currentPage: null
        }
    },
    methods: {
        getCharacters() {
            axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`, {
                params: {
                    limit: this.pageLimit,
                    offset: this.currentPage * this.pageLimit
                }
            })
                .then((result) => {
                    this.characters = result.data.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        moreItems() {
            this.pageLimit += this.pageOffset;
            this.getCharacters();
        }
    },
    mounted() {
        this.getCharacters();
    }
}
</script>

<style>
.characters-wrapper {
    padding: 2rem 0;
    background: #000 url(../assets/characters-bg.jpg) no-repeat center / cover;
    position: relative;
    flex:1;
}
.characters-wrapper::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0,0,0,.85);
    top: 0;
    left: 0;
}
</style>