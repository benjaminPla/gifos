import { createStore } from 'vuex';

export default createStore({
  state: {
    darkMode: false,
  },
  mutations: {
    /* eslint-disable */
    setDarkMode: (state) => state.darkMode = !state.darkMode,
    /* eslint-disable */
  },
  actions: {
  },
});
