<template>
    <div class="comics-wrapper">
        <div class="container">
            <div class="error-message" v-if="errorMessage">
                <h3>{{ errorMessage }}</h3>
            </div>
            <ul v-else class="flex-list flex just-btwn">
                <LoadingGif v-if="isLoading" />
                <li v-else v-for="comic in comics" :key="comic.id" class="card-item">
                    <router-link :to="{ name: 'comic', params: { id: comic.id } }">
                        <img :src="`${comic.thumbnail.path}/${comicsPosterSize}`" alt="Poster" class="card-item-img">
                        <h4>{{ comic.title }}</h4>
                    </router-link>
                </li>
            </ul>
            <AppPagination 
                :totalPages="totalComicsPages"
                :currentPage="currentComicsPage"
                @switchPage="switchComicsPage"
            />
        </div>
    </div>
</template>

<script>
  import { public_key, secret_key } from '@/marvel';
    import LoadingGif from '@/components/LoadingGif.vue';
import AppPagination from '@/components/AppPagination.vue';
  import axios from 'axios';
  
  export default {
      name: 'ComicsPage',
        components: {
            LoadingGif,
            AppPagination
        },
      data() {
          return {
                comics: [],
                comicsPosterSize: 'portrait_medium.jpg',
                pageComicsLimit: 20,
                totalComicsPages: 0,
                currentComicsPage: 1,
                isLoading: false,
                errorMessage: ''
          }
      },
      methods: {
          getComics() {
                this.isLoading = true;
              axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`, {
                        params: {
                            limit: this.pageComicsLimit,
                            offset: this.currentComicsPage * this.pageComicsLimit
                        }
                    })
                  .then((result) => {
                    this.comics = result.data.data.results;
                    this.totalComicsPages = Math.floor(result.data.data.total / this.pageComicsLimit);
                    this.isLoading = false;
                  })
                    .catch((error) => {
                        this.errorMessage = error;
                        this.isLoading = false;
                    })
          },
        switchComicsPage(page) {
            this.currentComicsPage = page;
            console.log(page);
        }
      },
      mounted() {
          this.getComics();
      },
        watch: {
            currentComicsPage() {
                this.getComics();
            },
        }
  }
  </script>
  
<style>
    .comics-wrapper {
        padding: 2rem 0;
        background: #000 url(../assets/comics-bg.jpg) no-repeat center / cover;
        position: relative;
        flex:1;
    }
    .comics-wrapper::before {
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