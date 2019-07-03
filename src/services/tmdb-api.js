const axios = require('axios');
const apiUrl = 'http://tmdb-api-backend.test/api/';
const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE5YWFlNjAyYWViOWRjMzk0MDc3OWVkNTZhY2RkODVmNjJiZGE2MmFhNDVhNjU4MmQ4YzMwZjk0NjAzNmM2MzQxYjMwYTZiNjA5MzZhZjljIn0.eyJhdWQiOiIyIiwianRpIjoiMTlhYWU2MDJhZWI5ZGMzOTQwNzc5ZWQ1NmFjZGQ4NWY2MmJkYTYyYWE0NWE2NTgyZDhjMzBmOTQ2MDM2YzYzNDFiMzBhNmI2MDkzNmFmOWMiLCJpYXQiOjE1NjIwNjg3MTQsIm5iZiI6MTU2MjA2ODcxNCwiZXhwIjoxNTkzNjkxMTE0LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.oMmDf8uGhP53PL6ujDmSAZ5k_WiSDJsW28JxdDNB8GdBqT88PXShb7SABekmrLRJM_SvhjQqkXdQ0TlTgJDGAKblBOe_UECMzTIjL0erBLf8RWBgsSSY6O_ysPvghKkg9j2H0Q7gRI7icbPFt8_Jrb2MYg8sNDTA47WgumjieaYWcrp_3VnTSJTJ-rdWpCS8dInfADGySCqJxs6yu1uerLPNK4iM4Q82VSt8ps1eS2lHL1RkPxp2h8i1jXqmx7ahPrIgd0byQxMnHaWfhBfHMlJNJ-B1lGE3t0BEhc_g0BvwJEQXvu-fsoZl0PZXnMvaG1_IqmKTOp3tNlE5uSOzNyPp1ZfFsZkPiL-Qf_4fUfvuMKDykwkS3oqBImjHBLiZ60fWFsEYfi4sBh5KZVo1eh1XsQzknLTMCWIaKUuoGi1ckCKNokUb4w4P6z7WgqgsBRcNwmA64rfEl6PPwaRbLmf3Og1P_2T2Z2M0_TeAiROXmYQ4W6-xnRwaPspJ1PMuXpitTTbBQv_-aizDsNVfZ8mxZtUvt_nwG9yNmRWRiE8lJHLCDdusN9qw0-2O0WAjZ2_LMwGlwWBt65fgl2KDT2EuJytd7fm0lKBI75mU2moOK03h9F-RW_xL0ou9lO3DrRat2iuC-v9AhQ7ZEJ3pISwfrPBmK3yoz1cNItY4BfE';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

module.exports = {
    search(q) {
        return axios.get(apiUrl + 'movie/search', {
            params : {q}
        })
    },
    mostPopular() {
        return axios.get(apiUrl + 'movie/popular')
    },
    getMovie(id) {
        return axios.get(apiUrl + 'movie/' + id)
    },
    addToFavorites(id) {
        return axios.post(apiUrl + 'user/favorites/' + id)
    },
    removeFromFavorites(id) {
        return axios.delete(apiUrl + 'user/favorites/' + id)
    },
}