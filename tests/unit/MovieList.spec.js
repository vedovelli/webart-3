import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import MovieList from '@/components/Movies/MovieList';
import getters from '@/store/Movies/getters';
import { makeServer } from '@/miragejs';

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

let server;

describe('MovieList', () => {
  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => server.shutdown());

  it('should return 2 movies', () => {
    const state = {
      movies: server.createList('movie', 2),
    };

    const wrapper = mountMovieList({ state });

    expect(wrapper.findAll('[data-testid="movie"]')).toHaveLength(2);
  });

  it('should return 2 movies even if a bigger list is provided but only 2 of them have backdrop_path', () => {
    const state = {
      movies: [
        ...server.createList('movie', 2),
        server.create('movie', {
          backdrop_path: null,
        }),
      ],
    };

    const wrapper = mountMovieList({ state });

    expect(wrapper.findAll('[data-testid="movie"]')).toHaveLength(2);
  });

  it('should display an error message when server is down', () => {
    const state = {
      movies: [],
      wasSearched: true,
    };

    const wrapper = mountMovieList({ state });

    expect(wrapper.find('[data-testid="no-results"]')).toBeDefined();
  });
});
