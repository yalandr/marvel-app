<template>
    <div class="comic-wrapper">
        <div class="container comic-card" v-for="comic in comicData" :key="comic.id">
            <h2>
                {{ comic.title }}
            </h2>
            <img :src="comicPosterUrl" alt="">
            <p>
                {{ comic.description }}
            </p>
            <router-link to="/comics">
                <button class="btn btn-back">Back</button>
            </router-link>
        </div>
    </div>
  </template>
  
  <script>
  import { public_key } from '@/marvel';
  import axios from 'axios';
  
  export default {
      name: 'ComicPage',
      data() {
          return {
              comicId: this.$route.params.id,
              comicData: [],
              comicPosterUrl: '',
              comicPosterSize: 'portrait_uncanny.jpg',
          }
      },
      methods: {
          getComic() {
              axios.get(`http://gateway.marvel.com/v1/public/comics/${this.comicId}?apikey=${public_key}`)
                  .then((result) => {
                      result.data.data.results.forEach((item) => {
                          this.comicData.push(item);
                          console.log(this.comicData);
                          this.comicPosterUrl = `${item.thumbnail.path}/${this.comicPosterSize}`;
                      })
                  })
                  .catch((error) => {
                      console.log(error);
                  })
          }
      },
      mounted() {
          this.getComic()
      }
  }
  </script>
  
  <style>
    .comic-wrapper {
        padding: 2rem 0;
        background: #000 url(../assets/characters-bg.jpg) no-repeat center / cover;
        position: relative;
        flex:1;
    }
    .comic-wrapper::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(0,0,0,.85);
        top: 0;
        left: 0;
    }
    .comic-card {
        padding: 1rem;
        border-radius: 5px;
        background-color: rgba(0,0,0,.6);
        backdrop-filter: blur(6px);
        border: 1px solid #333
    }
  </style>