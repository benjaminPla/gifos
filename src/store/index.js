import { createStore } from 'vuex';

export default createStore({
  state: {
    searchGifos: [],
    searchGifosOffset: 0,

    trendingsGifos: [],
    trendingsOffset: 0,

    darkMode: false,
  },
  mutations: {
    /* eslint-disable */
    setSearchGifos: (state, payload) => state.searchGifos = payload,
    setSearchGifosOffset: (state, payload) => state.searchGifosOffset += payload,

    setTrendingsGifos: (state, payload) => state.trendingsGifos = payload,
    setTrendingsOffset: (state, payload) => state.trendingsOffset += payload,

    setDarkMode: (state) => state.darkMode = !state.darkMode
    /* eslint-disable */
  },
  actions: {
    async getSearchGifos({ state, commit }, value) {
      const offset = state.searchGifosOffset;
      const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.VUE_APP_API_KEY}`;
      const gifos = await fetch(`${endpoint}&q=${value}&offset=${state.searchGifosOffset}&limit=12`)
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setSearchGifos', gifos.data);
    },
    setSearchGifosOffset({ commit, dispatch }) {
      commit('setSearchGifosOffset', 12);
      dispatch('getSearchGifos', 'hola');
    },
    async getTrendingsGifos({ commit, state }) {
      const offset = state.trendingsOffset;
      const endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY}`;
      const gifos = await fetch(`${endpoint}&offset=${offset}&limit=4`)
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setTrendingsGifos', gifos.data);
    },
    setTrendingsOffset({ state, commit, dispatch }, type) {
      if(type === 'previous' && state.trendingsOffset === 0) return;
      type === 'next' ? commit('setTrendingsOffset', 4) : commit('setTrendingsOffset', -4);
      dispatch('getTrendingsGifos');
    },
  },
});
