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
    </v-app>
</template>
<style>

</style>
<script>
    export default {
        name: 'App'
    }
</script>
