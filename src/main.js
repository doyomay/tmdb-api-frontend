import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Home from './components/HomeComponent.vue'
import Movie from './components/MovieComponent.vue'
import VueRouter from 'vue-router'

const addFavoriteMixin = require('./mixins/AddToFavoriteMixin');
Vue.config.productionTip = false
Vue.mixin({
    data() {
        return {
            addToFavorite: function (movieId) {
                console.log(movieId)
            }
        }
    }
})
Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/movie/:id(\\d+)', component: Movie},
];


const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
