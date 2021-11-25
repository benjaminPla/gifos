import { createStore } from 'vuex';

const apiKey = process.env.VUE_APP_API_KEY;

export default createStore({
  state: {
    searchGifos: [],

    trendingsGifos: [],
    trendingsOffset: 0,

    darkMode: false,
  },
  mutations: {
    /* eslint-disable */
    setSearchGifos: (state, payload) => state.searchGifos = payload,

    setTrendingsGifos: (state, payload) => state.trendingsGifos = payload,
    setTrendingsOffset: (state, payload) => state.trendingsOffset += payload,

    setDarkMode: (state) => state.darkMode = !state.darkMode
    /* eslint-disable */
  },
  actions: {
    async getSearchGifos({ commit }, value) {
      const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;
      const gifos = await fetch(`${endpoint}&q=${value}&limit=12&offset=0`)
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setSearchGifos', gifos.data);
    },
    async getTrendingsGifos({ commit, state }) {
      const offset = state.trendingsOffset;
      const endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}&limit=4`;
      const gifos = await fetch(endpoint)
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setTrendingsGifos', gifos.data);
    },
    setTrendingsOffset({ commit, state, dispatch }, type) {
      if(type === 'previous' && state.trendingsOffset === 0) return;
      type === 'next' ? commit('setTrendingsOffset', 4) : commit('setTrendingsOffset', -4);
      dispatch('getTrendingsGifos');
    },
  },
});
