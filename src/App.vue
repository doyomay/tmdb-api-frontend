<template>
    <v-app class="js-fix-padding-top">
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <router-link class="font-weight-light" to="/">tmdb</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link class="font-weight-light" to="/foo">Go to Foo</router-link>
            <router-link class="font-weight-light" to="/bar">Go to Bar</router-link>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
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
                                    {{ movie.title }}
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
    </v-app>
</template>
<style>
    .js-fix-padding-top {
        padding-top: 100px;
    }

    .v-card {

    }
    .v-card__link{
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
<script>

    const axios = require('axios');
    const apiUrl = 'http://tmdb-api-backend.test/api/';
    const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE5YWFlNjAyYWViOWRjMzk0MDc3OWVkNTZhY2RkODVmNjJiZGE2MmFhNDVhNjU4MmQ4YzMwZjk0NjAzNmM2MzQxYjMwYTZiNjA5MzZhZjljIn0.eyJhdWQiOiIyIiwianRpIjoiMTlhYWU2MDJhZWI5ZGMzOTQwNzc5ZWQ1NmFjZGQ4NWY2MmJkYTYyYWE0NWE2NTgyZDhjMzBmOTQ2MDM2YzYzNDFiMzBhNmI2MDkzNmFmOWMiLCJpYXQiOjE1NjIwNjg3MTQsIm5iZiI6MTU2MjA2ODcxNCwiZXhwIjoxNTkzNjkxMTE0LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.oMmDf8uGhP53PL6ujDmSAZ5k_WiSDJsW28JxdDNB8GdBqT88PXShb7SABekmrLRJM_SvhjQqkXdQ0TlTgJDGAKblBOe_UECMzTIjL0erBLf8RWBgsSSY6O_ysPvghKkg9j2H0Q7gRI7icbPFt8_Jrb2MYg8sNDTA47WgumjieaYWcrp_3VnTSJTJ-rdWpCS8dInfADGySCqJxs6yu1uerLPNK4iM4Q82VSt8ps1eS2lHL1RkPxp2h8i1jXqmx7ahPrIgd0byQxMnHaWfhBfHMlJNJ-B1lGE3t0BEhc_g0BvwJEQXvu-fsoZl0PZXnMvaG1_IqmKTOp3tNlE5uSOzNyPp1ZfFsZkPiL-Qf_4fUfvuMKDykwkS3oqBImjHBLiZ60fWFsEYfi4sBh5KZVo1eh1XsQzknLTMCWIaKUuoGi1ckCKNokUb4w4P6z7WgqgsBRcNwmA64rfEl6PPwaRbLmf3Og1P_2T2Z2M0_TeAiROXmYQ4W6-xnRwaPspJ1PMuXpitTTbBQv_-aizDsNVfZ8mxZtUvt_nwG9yNmRWRiE8lJHLCDdusN9qw0-2O0WAjZ2_LMwGlwWBt65fgl2KDT2EuJytd7fm0lKBI75mU2moOK03h9F-RW_xL0ou9lO3DrRat2iuC-v9AhQ7ZEJ3pISwfrPBmK3yoz1cNItY4BfE';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    export default {
        name: 'App',

        created() {
            // Make a request for a user with a given ID
            axios.get(apiUrl + 'movie/popular')
                .then((response) => {
                    // handle success
                    console.log(response.data.data.results);

                    this.mostPopular = response.data.data.results
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        methods : {
            addToFavorite: function(movieId) {
                console.log(movieId)
            }
        },
        data() {
            return {
                mostPopular: [],
                page: 1,
            }
        }
    }
</script>
