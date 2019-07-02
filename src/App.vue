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
                                <v-btn flat color="orange">Share</v-btn>
                                <v-btn flat color="orange">Explore</v-btn>
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
    const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE4ZjA5NDdkZGU2NDA2MmQ3NzU1NmEyMDVjODM2ZGUyMDEzMTMzZjVhODAyNDZhZGUyNTg4ZGY2MjMzYjkzMmUzODliMTdlYTAxZGM4OTk0In0.eyJhdWQiOiIxIiwianRpIjoiYThmMDk0N2RkZTY0MDYyZDc3NTU2YTIwNWM4MzZkZTIwMTMxMzNmNWE4MDI0NmFkZTI1ODhkZjYyMzNiOTMyZTM4OWIxN2VhMDFkYzg5OTQiLCJpYXQiOjE1NjIwMDIzNTAsIm5iZiI6MTU2MjAwMjM1MCwiZXhwIjoxNTkzNjI0NzUwLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.hSvIxrkVbuXIvZr9fre_rSrlpgMX1VS_Mh8pvPk88XRX-RJVf7ZHuSCwzN7D2A4MWn-TJjvd1Ok1WxHQ7pcrVo1LmiIymmTBTTHnR7Amf3W5lMfa7fMa-uYChwImxiRlWZnYwO7lxeu3o78lUjepn3iyxsa0Ur4ASHUfW-9Azm40nf0ONhdHLsWp46KnDUbajbAohwRgCQAGi_2eSdTDTGCSM8vEGb-WaMvJwu1L881wZUgaVH78UIhvTteneoyJ2Gm6Al1TcDe2eWnTljBs6wR42CEJmj3GIffBl8d-EvYppZAeiHbRP0zGFOAPVOOcIciy-3pKxYDmp9RdilIEeVaIpsl3KKHwRl3IKAbA_ZXfABQINC8kkdjpLxaEvPi-dzj03XiHcDnBQaIOk9dOt_Y8uyDHaBhpIvy8ERm4zBNNbaTCksgH6e7xUV6LZV1lc6zvtzB4WzdWQNVsMDl5XjfXpLp57UP8TwtQDJhgAbtKhytf53VGGWW6xcHQScZAlIlh3qOU2QH6c4xhB3xqBT6x_ZkpEChOK9iOf4183cNYwfH4jlMlq2MS6C9z_-L4Y0GtQRi15w8c2vUjq8tf1BpRNtsf26kOZXL2UAaQ23QQS4N_FOIipQ3IgsShSiNmxHzYeOMPzzUpS1lTaqWXc4TnBrXQf2yb92oAEp265-g';
    axios.defaults.headers.common['Bearer'] = AUTH_TOKEN;
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
        data() {
            return {
                mostPopular: [],
                page: 1,
            }
        }
    }
</script>
