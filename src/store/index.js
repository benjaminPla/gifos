import { createStore } from 'vuex';
import dotenv from 'dotenv';

dotenv.config();

export default createStore({
  state: {
    searchGifos: [],
    trendingsGifos: [],
    darkMode: false,
  },
  mutations: {
    /* eslint-disable */
    setDarkMode: (state) => state.darkMode = !state.darkMode,
    setSearchGifos: (state, payload) => state.searchGifos = payload,
    setTrendingsGifos: (state, payload) => state.trendingsGifos = payload,
    /* eslint-disable */
  },
  actions: {
    async getSearchGifos({ commit }, value) {
      const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz';
      // const apiKey = process.env.API_KEY;
      // const gifos = await fetch(endpoint + apiKey + '&q=goku&limit=12&offset=0')
      const gifos = await fetch(endpoint + '&q=' + value + '&limit=12&offset=0')
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setSearchGifos', gifos.data);
    },
    async getTrendingsGifos({ commit }) {
      const endpoint = 'https://api.giphy.com/v1/gifs/trending?api_key=oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz&offset=0&limit=4'
      const gifos = await fetch(endpoint)
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setTrendingsGifos', gifos.data);
    },
  },
});
