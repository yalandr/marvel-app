<template>
  <div class="character-wrapper">
    <div class="error-message" v-if="errorMessage">
        <h3>{{ errorMessage }}</h3>
    </div>
    <div v-else class="character-card container" v-for="char in characterData" :key="char.id">
        <h2 class="card-title">
            {{ char.name }}
        </h2>
        <div class="card-content flex flex-start just-btwn">
            <img :src="thumbnailUrl" alt="Poster" class="card-content-img">
            <div class="card-content-text">
                <p>
                    {{ char.description }}
                </p>
                <h3>{{ char.name }} takes part in:</h3>
                <ul class="flex">
                    <li v-for="comics in char.comics.items" :key="comics.name" class="card-item">
                        <router-link :to="{ name: 'comic', params: { id: comics.resourceURI.slice(-4) } }">
                            {{ comics.name }}
                        </router-link>
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
    name: 'CharacterPage',
    data() {
        return {
            characterId: this.$route.params.id,
            characterData: [],
            thumbnailUrl: '',
            thumbnailSize: 'standard_fantastic.jpg',
            errorMessage: '',
        }
    },
    methods: {
        getCharacter() {
            axios.get(`http://gateway.marvel.com/v1/public/characters/${this.characterId}?apikey=${public_key}`)
                .then((result) => {
                    result.data.data.results.forEach((item) => {
                        this.characterData.push(item);
                        console.log(item);
                        this.thumbnailUrl = `${item.thumbnail.path}/${this.thumbnailSize}`;
                    })
                })
                .catch((error) => {
                    this.errorMessage = error;
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
</style>