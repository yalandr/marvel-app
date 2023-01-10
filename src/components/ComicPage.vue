<template>
    <div class="comic-wrapper">
        <div class="container comic-card" v-for="comic in comicData" :key="comic.id">
            <h2 class="card-title">
                {{ comic.title }}
            </h2>
            <div class="card-content flex flex-start just-btwn">
                <img :src="comicPosterUrl" alt="Poster" class="card-content-img">
                <div class="card-content-text">
                    <div class="description-wrapper" v-if="comic.description !== ''">
                        <h3>Description:</h3>
                        <p>
                            {{ comic.description }}
                        </p>
                    </div>
                    <div class="heroes-wrapper" v-if="comic.characters.items.length">
                        <h3>Heroes:</h3>
                        <ul class="flex">
                            <li v-for="hero in comic.characters.items" :key="hero.name" class="card-item">
                                <router-link :to="{ name: 'character', params: { id: hero.resourceURI.slice(-7) } }">{{ hero.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <h3>Creators:</h3>
                    <ul class="flex">
                        <li v-for="creator in comic.creators.items" :key="creator.name" class="card-item">
                            {{ creator.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <button class="btn btn-back" @click="$router.go(-1)">Back</button>
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
    .heroes-wrapper .card-item {
        padding: 0;
    }
    .heroes-wrapper .card-item a {
        padding: 0.5rem 1rem;
    }
  </style>