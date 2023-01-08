<template>
  <div class="character-wrapper container" v-for="char in characterData" :key="char.id">
    <h2>
        {{ char.name }}
    </h2>
    <img :src="thumbnailUrl" alt="">
    <p>
        {{ char.description }}
    </p>
    <h3>{{ char.name }} tooks part in:</h3>
    <ul>
        <li v-for="comics in char.comics.items" :key="comics.name">
            {{ comics.name }}
        </li>
    </ul>
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

</style>