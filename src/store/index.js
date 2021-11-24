import { createStore } from 'vuex';
import dotenv from 'dotenv';

dotenv.config();

export default createStore({
  state: {
    gifos: [],
    darkMode: false,
  },
  mutations: {
    /* eslint-disable */
    setDarkMode: (state) => state.darkMode = !state.darkMode,
    setGifos: (state, payload) => state.gifos = payload,
    /* eslint-disable */
  },
  actions: {
    async getGifos({ commit }, value) {
      const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz';
      // const apiKey = process.env.API_KEY;
      // const gifos = await fetch(endpoint + apiKey + '&q=goku&limit=12&offset=0')
      const gifos = await fetch(endpoint + '&q=' + value + '&limit=12&offset=0')
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setGifos', gifos.data);
    },
  },
});
