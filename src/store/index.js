import { createStore } from 'vuex';

export default createStore({
  state: {
    searchGifos: [],
    searchedGifosValue: '',
    searchGifosOffset: 0,
    displayViewMoreBtn: false,

    trendingsGifos: [],
    trendingsOffset: 0,

    myGifos: [],

    favsGifos: [],
    favsGifosIds: JSON.parse(localStorage.getItem('favsGifos')) || [],

    darkMode: false,
  },
  mutations: {
    /* eslint-disable */
    setSearchGifos: (state, payload) => state.searchGifos = payload,
    setSearchedGifosValue: (state, payload) => state.searchedGifosValue = payload,
    setSearchGifosOffset: (state, payload) => state.searchGifosOffset += payload,
    resetSearchGifosOffset: (state) => state.searchGifosOffset = 0,
    toggleViewMoreBtn: (state) => state.displayViewMoreBtn = true,

    setTrendingsGifos: (state, payload) => state.trendingsGifos = payload,
    setTrendingsOffset: (state, payload) => state.trendingsOffset += payload,

    setFavsGifos: (state, payload) => state.favsGifos = payload,

    setDarkMode: (state) => state.darkMode = !state.darkMode
    /* eslint-disable */
  },
  actions: {
    searchGifos({ state, commit, dispatch }, value) {
      if (value !== state.searchGifosValue) {
        commit('setSearchedGifosValue', value);
        commit('resetSearchGifosOffset');
      };
      !state.displayViewMoreBtn && commit('toggleViewMoreBtn');
      dispatch('getSearchGifos');
    },
    async getSearchGifos({ state, commit }) {
      const endpoint = 'https://api.giphy.com/v1/gifs/search'
        +`?api_key=${process.env.VUE_APP_API_KEY}`
        +`&q=${state.searchedGifosValue}`
        +`&offset=${state.searchGifosOffset}`
        +'&limit=12';
      const gifos = await fetch(endpoint)
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setSearchGifos', gifos.data);
    },
    setSearchGifosOffset({ state, commit, dispatch }) {
      commit('setSearchGifosOffset', 12);
      dispatch('getSearchGifos');
    },
    async getTrendingsGifos({ state, commit }) {
      const endpoint = 'https://api.giphy.com/v1/gifs/trending'
        +`?api_key=${process.env.VUE_APP_API_KEY}`
        +`&offset=${state.trendingsOffset}`
        +'&limit=4';
      const gifos = await fetch(endpoint)
        .then(data => data.json())
        .catch(error => console.log(error));
      commit('setTrendingsGifos', gifos.data);
    },
    setTrendingsOffset({ state, commit, dispatch }, type) {
      if(type === 'previous' && state.trendingsOffset === 0) return;
      type === 'next' ? commit('setTrendingsOffset', 4) : commit('setTrendingsOffset', -4);
      dispatch('getTrendingsGifos');
    },
    async getFavsGifos({ state, commit }) {
      if (state.favsGifosIds.length === 0) {
        return;
      } else {
        const gifos = [];

        await Promise.all(state.favsGifosIds.map(async (id) => {
          const endpoint = 'https://api.giphy.com/v1/gifs/'
          +`${id}?api_key=${process.env.VUE_APP_API_KEY}`;

          const gifo = await fetch(endpoint)
            .then(data => data.json())
            .catch(error => console.log(error));

          gifos.push(gifo.data);
        }));

      commit('setFavsGifos', gifos);
      };
    },
  },
});
