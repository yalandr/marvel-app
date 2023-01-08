<template>
    <div class="comics-wrapper container">
      <ul>
          <li v-for="comic in comics" :key="comic.id">
              <router-link :to="{ name: 'comic', params: { id: comic.id } }">
                  {{ comic.title }}
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
              comics: []
          }
      },
      methods: {
          getComics() {
              axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
                  .then((result) => {
                    console.log(result.data.data.results);
                      this.comics = result.data.data.results;
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
  
  </style>