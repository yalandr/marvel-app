<template>
  <div class="characters-wrapper">
    <div class="container">
        <div class="control-panel">
            <AppInput v-model="searchQuery" placeholder="Search..." />
        </div>
        <div class="error-message" v-if="errorMessage">
            <h3>{{ errorMessage }}</h3>
        </div>
        <ul v-else class="flex-list flex just-btwn">
            <LoadingGif v-if="isLoading" />
            <li v-else v-for="character in searchedCharacters" :key="character.id" class="card-item">
                <router-link :to="{ name: 'character', params: { id: character.id } }">
                    <img :src="`${character.thumbnail.path}/${characterPosterSize}`" alt="Poster" class="card-item-img"> <br>
                    <h4>{{ character.name }}</h4>
                </router-link>
            </li>
        </ul>
        <AppPagination 
            :totalPages="totalPages"
            :currentPage="currentPage"
            @switchPage="switchPage"
        />
    </div>
  </div>
</template>

<script>
import { public_key, secret_key } from '@/marvel';
import AppInput from '@/components/AppInput.vue';
import AppPagination from '@/components/AppPagination.vue';
import LoadingGif from '@/components/LoadingGif.vue';
import axios from 'axios';

export default {
    name: 'CharactersPage',
    components: {
        AppInput,
        LoadingGif,
        AppPagination
    },
    data() {
        return {
            characters: [],
            characterPosterSize: 'portrait_medium.jpg',
            pageLimit: 20,
            totalPages: 0,
            currentPage: 1,
            searchQuery: '',
            isLoading: false,
            errorMessage: ''
        }
    },
    methods: {
        getCharacters() {
            this.isLoading = true;
            axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`, {
                params: {
                    limit: this.pageLimit,
                    offset: this.currentPage * this.pageLimit
                }
            })
            .then((result) => {
                this.totalPages = Math.floor(result.data.data.total / this.pageLimit);
                this.characters = result.data.data.results;
                this.isLoading = false;
            })
            .catch((error) => {
                this.errorMessage = error;
                this.isLoading = false;
            })
        },
        switchPage(page) {
            this.currentPage = page;
        }
    },
    mounted() {
        this.getCharacters();
    },
    computed: {
        searchedCharacters() {
            return this.characters.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        currentPage() {
            this.getCharacters();
        },
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