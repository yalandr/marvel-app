<template>
    <div class="comic-wrapper container" v-for="comic in comicData" :key="comic.id">
      <h2>
          {{ comic.title }}
      </h2>
      <img :src="thumbnailUrl" alt="">
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
              thumbnailUrl: '',
              thumbnailSize: 'standard_fantastic.jpg'
          }
      },
      methods: {
          getComic() {
              axios.get(`http://gateway.marvel.com/v1/public/comics/${this.comicId}?apikey=${public_key}`)
                  .then((result) => {
                      result.data.data.results.forEach((item) => {
                          this.comicData.push(item);
                          console.log(this.comicData);
                        //   this.thumbnailUrl = `${item.thumbnail.path}/${this.thumbnailSize}`;
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
  
  </style>