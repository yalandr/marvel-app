<template>
    <div class="comics-wrapper">
      <ul class="flex-list flex just-btwn container">
          <li v-for="comic in comics" :key="comic.id" class="card-item">
              <router-link :to="{ name: 'comic', params: { id: comic.id } }">
                  {{ comic.title }} <br>
                  <img :src="`${comic.thumbnail.path}/${comicsPosterSize}`" alt="Poster">
              </router-link>
          </li>
      </ul>
    </div>
</template>

<script>
  import { public_key, secret_key } from '@/marvel';
  import axios from 'axios';
  
  export default {
      name: 'ComicsPage',
      data() {
          return {
              comics: [],
              comicsPosterSize: 'portrait_medium.jpg',
          }
      },
      methods: {
          getComics() {
              axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
                  .then((result) => {
                    result.data.data.results.forEach((item) => {
                        this.comics.push(item);
                    });
                  })
                  .catch((error) => {
                      console.log(error);
                  })
          }
      },
      mounted() {
          this.getComics();
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