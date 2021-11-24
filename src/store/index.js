import { createStore } from 'vuex';
import dotenv from 'dotenv';

dotenv.config();

export default createStore({
  state: {
    darkMode: false,
    gifos: [],
  },
  mutations: {
    /* eslint-disable */
    setDarkMode: (state) => state.darkMode = !state.darkMode,

    setGifos: (state, payload) => state.gifos = payload,
    /* eslint-disable */
  },
  actions: {
    async getGifos({ commit }) {
      const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz';
      // const apiKey = process.env.API_KEY;
      // console.log(apiKey);
      // const gifos = await fetch(endpoint + apiKye + '&q=goku&limit=12&offset=0')
      const gifos = await fetch(endpoint + '&q=goku&limit=12&offset=0')
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setGifos', gifos.data);
    },
  },
});
