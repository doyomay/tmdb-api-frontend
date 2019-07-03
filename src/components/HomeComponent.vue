<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="movie in mostPopular">
                    <router-link class="v-card__link" :to="'movie/' + movie.id">
                        <v-card height="100%">
                            <v-img
                                    class="white--text grey darken-4"
                                    height="200px"
                                    max-height="400px"
                                    :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path">
                                <v-card-title>
                                    {{ movie.title | capitalizeFirstLetter }}
                                </v-card-title>
                            </v-img>
                            <v-card-text>
                                {{ movie.overview }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn flat color="orange" :click="'addToFavorite(movie.id)'">add to favorite</v-btn>
                            </v-card-actions>
                        </v-card>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-md text-xs-center>
            <v-layout row>
                <v-pagination
                        v-model="page"
                        :length="6"
                ></v-pagination>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    const api = require('../services/tmdb-api');

    export default {
        name: "HomeComponent",
        created() {
            api.mostPopular().then(response => {
                this.mostPopular = response.data.data.results
            })
        },
        data() {
            return {
                mostPopular: [],
                page: 1,
            }
        }
    }
</script>

<style scoped>
    .js-fix-padding-top {
        padding-top: 100px;
    }

    .v-card {

    }

    .v-card__link {
        text-decoration: none;
    }

    .v-card__title {
        background-color: rgba(0, 0, 0, .2);
        font-size: 22px;
        transition: all .2s ease-in-out;
        font-family: 'Montserrat', sans-serif;
    }

    .v-card:hover .v-card__title {
        transform: scale(1.1);
    }

    .v-card * {
        text-decoration: none;
    }
</style>