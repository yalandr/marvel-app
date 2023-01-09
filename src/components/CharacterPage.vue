<template>
  <div class="character-wrapper">
    <div class="character-card container" v-for="char in characterData" :key="char.id">
        <h2 class="card-title">
            {{ char.name }}
        </h2>
        <div class="card-content flex flex-start just-btwn">
            <img :src="thumbnailUrl" alt="" class="card-content-img">
            <div class="card-content-text">
                <p>
                    {{ char.description }}
                </p>
                <h3>{{ char.name }} takes part in:</h3>
                <ul class="flex just-btwn">
                    <li v-for="comics in char.comics.items" :key="comics.name" class="card-item">
                        {{ comics.name }}
                    </li>
                </ul>
            </div>
        </div>
        <router-link to="/">
            <button class="btn btn-back">Back</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import { public_key } from '@/marvel';
import axios from 'axios';

export default {
    name: 'CharacterPage',
    data() {
        return {
            characterId: this.$route.params.id,
            characterData: [],
            thumbnailUrl: '',
            thumbnailSize: 'standard_fantastic.jpg'
        }
    },
    methods: {
        getCharacter() {
            axios.get(`http://gateway.marvel.com/v1/public/characters/${this.characterId}?apikey=${public_key}`)
                .then((result) => {
                    result.data.data.results.forEach((item) => {
                        this.characterData.push(item);
                        this.thumbnailUrl = `${item.thumbnail.path}/${this.thumbnailSize}`;
                    })
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.getCharacter()
    }
}
</script>

<style>
.character-wrapper {
    padding: 2rem 0;
    background: #000 url(../assets/characters-bg.jpg) no-repeat center / cover;
    position: relative;
    flex:1;
}
.character-wrapper::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0,0,0,.85);
    top: 0;
    left: 0;
}
.character-card {
    padding: 1rem;
    border-radius: 5px;
    background-color: rgba(0,0,0,.6);
    backdrop-filter: blur(6px);
    border: 1px solid #333
}
.card-title {
    margin-bottom: 1rem;
}
.card-content {
    margin-bottom: 1rem;
}
.card-content-img {
    border-radius: 5px;
    width: 35%;
    height: auto;
}
.card-content-text {
    width: 60%;
}
.card-content-text p,
.card-content-text h3 {
    margin-bottom: 1rem;
}
</style>