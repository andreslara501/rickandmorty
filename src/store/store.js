import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		characters: [],
		loading: 	false,
		searching:	'',
		page:		1
	},

	mutations: {
		setCharacters: (state, characters) => {
		  state.characters = characters;
		},
		setLoading: (state, loading) => {
			state.loading = loading;
		},
		setSearching: (state, searching) => {
			state.searching = searching;
		},
		setPage: (state, page) => {
			state.page = page;
		}
	},
});