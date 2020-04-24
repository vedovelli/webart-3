import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import MovieList from '@/components/Movies/MovieList';
import getters from '@/store/Movies/getters';

const localVue = createLocalVue();

localVue.use(Vuex);

const createStore = ({ state }) => {
  return new Vuex.Store({
    modules: {
      Movies: {
        namespaced: true,
        state: {
          ...state,
        },
        getters,
      },
    },
  });
};

const mountMovieList = ({ state }) => {
  const store = createStore({ state });
  return mount(MovieList, { store, localVue });
};

describe('MovieList', () => {});
