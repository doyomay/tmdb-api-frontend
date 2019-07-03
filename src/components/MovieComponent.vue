<template>
    <v-container grid-list-sm>
        <v-layout row wrap>
            <v-flex sm6 md4 xs12>
                <v-img class="white--text grey darken-4" height="auto" width="342px" :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path"></v-img>
            </v-flex>
            <v-flex sm6 md8 xs12>
                <v-card height="100%">
                    <h1>{{ movie.title }} ({{movie.release_date}})</h1>
                    <h2>{{ movie.tagline }}</h2>
                    <h3>{{ movie.vote_average}}</h3>
                    <v-card-text>
                        {{ movie.overview }}
                    </v-card-text>
                    <v-card-actions>
                        <a class="v-btn v-btn--flat theme--light" target="_blank" v-bind:href="'https://www.imdb.com/title/'+ movie.imdb_id">IMDB</a>
                        <v-btn flat color="orange" :click="'addToFavorite(movie.id)'">add to favorite</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const api = require('../services/tmdb-api');
    export default {
        name: "MovieComponent",
        created() {
            this.routeData = JSON.stringify(this.$route.params, null, 2)
            api.getMovie(this.$route.params.id).then(response => {
                this.movie = response.data.data
                console.log(this.movie)
            })
        },
        data() {
            return {
                routeData: '',
                movie: {}
            };
        }
    }
</script>

<style scoped>

</style>